exports.seed = async (knex) => {
    await knex('exercises').insert([
      {
        id: 1,
        workout_id: 1,
        exercise_name: "Standard Push-Up",
        exercise_description: "Keep back and abs tight and lower straight body a few inches from the floor."
      },
      {
        id: 2,
        workout_id: 1,
        exercise_name: "Wide Front Pull-Up",
        exercise_description: "If using a chin-up bar: Grasp chin-up bar using wide grip (a few inches wider than shoulder width). Pull body up until chin clears bar, and lower body back down. Be sure arms are fully extended at bottom position. If necessary, modify with one foot on chair.",
        alternate_description: "If using bands, "
      },
    ])
};
