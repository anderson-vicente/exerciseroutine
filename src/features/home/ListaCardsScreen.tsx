import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import styles from './lista_cards_styles';


const treinosData = {
    treino1: {
      Mobilidade: [
        {
          id: '1',
          text: 'MEO - Ativação Serrátil 6 Apoios',
          numbers: ['12', '03', '']
        },
        {
          id: '2',
          text: 'MQ - RE de Quadril',
          numbers: ['12', '03', '']
        }
      ],
      Exercícios: [
        {
          id: '3',
          text: 'PXV - Pulley Frente Supinada',
          numbers: ['12', '03', '45Kg']
        },
        {
          id: '4',
          text: 'PXH - Remada Cavalinho na Mina Terrestre',
          numbers: ['12', '03', '22,5Kg']
        },
        {
          id: '5',
          text: 'EMPH - Supino 45º Alternado com Descanso com Kef',
          numbers: ['12', '03', '10Kg']
        },
        {
          id: '6',
          text: 'EMPV - Desenvolvimento Bilateral com Elástico',
          numbers: ['12', '03', '']
        },
        {
          id: '7',
          text: 'DJ - Agachamento no TRX',
          numbers: ['12', '03', '']
        },
        {
          id: '8',
          text: 'DJ - Leg Press Horizontal',
          numbers: ['12', '03', '72Kg']
        },
        {
          id: '9',
          text: 'DQ - Banco Abdutor',
          numbers: ['12', '03', '66Kg']
        },
        {
          id: '10',
          text: 'CAE - Prancha Abdominal',
          numbers: ['12', '03', '']
        }
      ],
      Condicionamento: [
        {
          id: '11',
          text: 'AE - Caminhada na Esteira',
          numbers: ['15min', '', '']
        }
      ]
    },
    treino2: {
      Mobilidade: [
        {
          id: '1',
          text: 'MEO - Halo com Anilha',
          numbers: ['12', '03', '10Kg']
        },
        {
          id: '2',
          text: 'MQ - Extensão de Joelhos Dinâmica',
          numbers: ['12', '03', '']
        }
      ],
      Exercícios: [
        {
          id: '3',
          text: 'EMPH - Crucifixo Bilateral na Máquina',
          numbers: ['12', '03', '59Kg']
        },
        {
          id: '4',
          text: 'PXH - Remada Baixa Neutra',
          numbers: ['12', '03', '66Kg']
        },
        {
          id: '5',
          text: 'EMPV - Elevação Lateral com Halteres',
          numbers: ['12', '03', '06Kg']
        },
        {
          id: '6',
          text: 'PXV - Rosca Direta Alterada',
          numbers: ['12', '03', '10Kg']
        },
        {
          id: '7',
          text: 'DJ - Agachamento Frontal com Anilha',
          numbers: ['12', '03', '10Kg']
        },
        {
          id: '8',
          text: 'DJ - Hack',
          numbers: ['12', '03', '']
        },
        {
          id: '9',
          text: 'DJ - Banco Extensor',
          numbers: ['12', '03', '66Kg']
        },
        {
          id: '10',
          text: 'CAR - Perdigueiro Dinâmico',
          numbers: ['12', '03', '']
        }
      ],
      Condicionamento: [
        {
          id: '11',
          text: 'AE - Elíptico',
          numbers: ['15min', '', '']
        }
      ]
    }
  };

type ExerciseListScreenProps = {
  route: RouteProp<RootStackParamList, 'ExerciseList'>;
};

const ExerciseListScreen: React.FC<ExerciseListScreenProps> = ({ route }) => {
  const { treinoId, treinoTitle } = route.params;
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: treinoTitle });
  }, [navigation, treinoTitle]);

  const dadosTreino = treinosData[treinoId];

  const handleCheckboxPress = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.entries(dadosTreino).map(([category, items]) => (
        <View key={category}>
          <Text style={styles.title}>{category.toUpperCase()}</Text>
          {items.map((item) => (
            <TouchableOpacity
                key={item.id}
                style={[styles.todoItem, checkedItems[item.id] && styles.checkedItem]}
                onPress={() => handleCheckboxPress(item.id)}
            >
                <View style={styles.checkboxWrapper}>
                <View style={[styles.checkmark, checkedItems[item.id] && styles.checkedCheckmark]}>
                    {checkedItems[item.id] && <View style={styles.checkmarkIcon} />}
                </View>
                </View>
                <View style={styles.todoContent}>
                <Text style={styles.todoText}>{item.text}</Text>
                <View style={styles.todoNumberContainer}>
                    {item.numbers.map((number, index) => (
                    <Text key={index} style={styles.todoNumber}>
                        {number}
                    </Text>
                    ))}
                </View>
                </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default ExerciseListScreen;