// services/databaseService.ts
import { database } from '../utils/database';

export const initDatabase = () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      // Tabela de Usuários
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT UNIQUE NOT NULL,
          profile_pic TEXT
        );`
      );

      // Tabela de Treinos
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS workouts (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          created_at TEXT NOT NULL
        );`
      );

      // Tabela de Grupos de Exercícios
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS exercise_groups (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL
        );`
      );

      // Tabela de Exercícios
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS exercises (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          created_at TEXT NOT NULL
        );`
      );

      // Tabela de relação entre Treinos e Grupos
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS workout_groups (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          workout_id INTEGER NOT NULL,
          group_id INTEGER NOT NULL,
          order_index INTEGER NOT NULL,
          FOREIGN KEY (workout_id) REFERENCES workouts (id) ON DELETE CASCADE,
          FOREIGN KEY (group_id) REFERENCES exercise_groups (id) ON DELETE CASCADE
        );`
      );

      // Tabela de relação entre Grupos e Exercícios
      // Inclui detalhes específicos como repetições, séries e peso
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS group_exercises (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          group_id INTEGER NOT NULL,
          exercise_id INTEGER NOT NULL,
          reps TEXT,
          sets TEXT,
          weight TEXT,
          order_index INTEGER NOT NULL,
          FOREIGN KEY (group_id) REFERENCES exercise_groups (id) ON DELETE CASCADE,
          FOREIGN KEY (exercise_id) REFERENCES exercises (id) ON DELETE CASCADE
        );`
      );

      // Tabela de Calendário/Histórico de Treinos
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS workout_history (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          workout_id INTEGER NOT NULL,
          date TEXT NOT NULL,
          completion_percentage INTEGER NOT NULL,
          notes TEXT,
          FOREIGN KEY (workout_id) REFERENCES workouts (id) ON DELETE CASCADE
        );`
      );

      // Tabela de Exercícios Completados (para rastrear quais exercícios foram feitos)
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS completed_exercises (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          history_id INTEGER NOT NULL,
          exercise_id INTEGER NOT NULL,
          completed INTEGER NOT NULL DEFAULT 0,
          actual_reps TEXT,
          actual_sets TEXT,
          actual_weight TEXT,
          notes TEXT,
          FOREIGN KEY (history_id) REFERENCES workout_history (id) ON DELETE CASCADE,
          FOREIGN KEY (exercise_id) REFERENCES exercises (id) ON DELETE CASCADE
        );`,
        [],
        () => {
          resolve(true);
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

// Função para carregar dados iniciais (opcional)
export const loadInitialData = () => {
  return new Promise((resolve, reject) => {
    database.transaction(tx => {
      // Verificar se já existem dados
      tx.executeSql(
        "SELECT COUNT(*) as count FROM workouts",
        [],
        (_, result) => {
          const count = result.rows.item(0).count;
          if (count === 0) {
            // Inserir dados iniciais
            insertInitialData(tx, resolve, reject);
          } else {
            resolve(true);
          }
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

const insertInitialData = (
  tx: SQLite.SQLTransaction,
  resolve: (value: unknown) => void,
  reject: (reason?: any) => void
) => {
  // Inserir grupos de exercícios padrão
  tx.executeSql(
    "INSERT INTO exercise_groups (name) VALUES (?), (?), (?)",
    ["Mobilidade", "Exercícios", "Condicionamento"],
    (_, resultGroups) => {
      // Inserir treino padrão
      const now = new Date().toISOString();
      tx.executeSql(
        "INSERT INTO workouts (name, created_at) VALUES (?, ?)",
        ["Treino 1", now],
        (_, resultWorkout) => {
          const workoutId = resultWorkout.insertId;

          // Associar grupos ao treino
          const mobilidadeId = 1;
          const exerciciosId = 2;
          const condicionamentoId = 3;

          tx.executeSql(
            "INSERT INTO workout_groups (workout_id, group_id, order_index) VALUES (?, ?, ?), (?, ?, ?), (?, ?, ?)",
            [workoutId, mobilidadeId, 0, workoutId, exerciciosId, 1, workoutId, condicionamentoId, 2],
            (_, resultWorkoutGroups) => {
              // Inserir exercícios
              tx.executeSql(
                "INSERT INTO exercises (name, created_at) VALUES (?, ?), (?, ?), (?, ?), (?, ?)",
                [
                  "MEO - Ativação Serrátil 6 Apoios", now,
                  "MQ - RE de Quadril", now,
                  "PXV - Pulley Frente Supinada", now,
                  "AE - Caminhada na Esteira", now
                ],
                (_, resultExercises) => {
                  // Associar exercícios aos grupos
                  tx.executeSql(
                    `INSERT INTO group_exercises
                    (group_id, exercise_id, reps, sets, weight, order_index)
                    VALUES (?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?), (?, ?, ?, ?, ?, ?)`,
                    [
                      mobilidadeId, 1, "12", "03", "", 0,
                      mobilidadeId, 2, "12", "03", "", 1,
                      exerciciosId, 3, "12", "03", "45Kg", 0,
                      condicionamentoId, 4, "15min", "", "", 0
                    ],
                    () => {
                      resolve(true);
                    },
                    (_, error) => {
                      reject(error);
                      return false;
                    }
                  );
                },
                (_, error) => {
                  reject(error);
                  return false;
                }
              );
            },
            (_, error) => {
              reject(error);
              return false;
            }
          );
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    },
    (_, error) => {
      reject(error);
      return false;
    }
  );
};