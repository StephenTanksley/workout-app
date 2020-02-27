
exports.seed = async (knex) => {
  await knex('workouts').insert([
    {
      id: 1,
      workout_name: "Chest & Back"
    },
    {
      id: 2,
      workout_name: "Shoulders & Arms"
    },
    {
      id: 3,
      workout_name: "Legs & Back"
    },
    {
      id: 4,
      workout_name: "Chest, Shoulders & Triceps"
    },
    {
      id: 5,
      workout_name: "Back & Biceps"
    },
    {
      id: 6,
      workout_name: "Legs & Back"
    },
  ])
};
