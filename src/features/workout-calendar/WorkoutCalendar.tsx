import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { MarkedDates } from 'react-native-calendars/src/types';

interface WorkoutData {
  date: string;
  workoutId: number;
}

interface WorkoutColors {
  [key: number]: string;
}


interface WorkoutNames {
  [key: number]: string;
}

const WorkoutCalendar = () => {
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const workoutColors: WorkoutColors = {
    1: '#FF5733',
    2: '#33A1FF'
  };

  const workoutNames: WorkoutNames = {
    1: 'Treino A - Superior',
    2: 'Treino B - Inferior'
  };

  const fetchWorkoutDates = (): Promise<WorkoutData[]> => {
    setIsLoading(true);

    return new Promise((resolve) => {
      setTimeout(() => {

        const data: WorkoutData[] = [
          { date: '2025-03-04', workoutId: 1 },
          { date: '2025-03-06', workoutId: 2 },
          { date: '2025-03-08', workoutId: 1 },
          { date: '2025-03-11', workoutId: 2 },
          { date: '2025-03-13', workoutId: 1 },
          { date: '2025-03-15', workoutId: 2 },
          { date: '2025-03-18', workoutId: 1 },
        ];
        resolve(data);
      }, 1000);
    });
  };

  useEffect(() => {
    const loadWorkoutDates = async () => {
      try {
        const workoutDates = await fetchWorkoutDates();

        const marked: MarkedDates = {};
        workoutDates.forEach(workout => {
          const color = workoutColors[workout.workoutId];

          marked[workout.date] = {
            selected: true,
            selectedColor: color,
            dotColor: color,
            marked: true
          };
        });

        setMarkedDates(marked);
      } catch (error) {
        console.error('Erro ao carregar as datas de treino:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadWorkoutDates();
  }, []);

  const handleDayPress = (day: { dateString: string }) => {
    Alert.alert('Dia selecionado:', day.dateString);
  };

  return (
    <View style={styles.outerContainer}>
      <Calendar
        style={styles.calendar}
        markedDates={markedDates}
        onDayPress={handleDayPress}
        monthFormat={'MMMM yyyy'}
        hideExtraDays={true}
        firstDay={1}
        enableSwipeMonths={true}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          arrowColor: '#2d4150',
          monthTextColor: '#2d4150',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 14
        }}
      />

      <View style={styles.legendContainer}>
        {/* <Text style={styles.legendTitle}>Legenda:</Text> */}
        {Object.keys(workoutNames).map((workoutId) => (
          <View key={workoutId} style={styles.legendItem}>
            <View
              style={[
                styles.colorBox,
                {backgroundColor: workoutColors[parseInt(workoutId)]}
              ]}
            />
            <Text style={styles.legendText}>{workoutNames[parseInt(workoutId)]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    outerContainer: {
      width: '100%',
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      marginBottom: 20
    },
    calendar: {
      width: '100%',
      paddingLeft: 0,
      paddingRight: 0
    },
    legendContainer: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#f9f9f9',
      borderRadius: 8
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8
    },
    colorBox: {
      width: 10,
      height: 10,
      borderRadius: 2,
      marginRight: 10
    },
    legendText: {
      fontSize: 12
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
      width: '80%',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center'
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10
    },
    modalText: {
      fontSize: 16,
      marginBottom: 20
    },
    closeButton: {
      backgroundColor: '#FF5733',
      padding: 10,
      borderRadius: 5
    },
    closeButtonText: {
      color: '#fff',
      fontWeight: 'bold'
    }
  });

export default WorkoutCalendar;