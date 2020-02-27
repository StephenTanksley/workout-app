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
        alternate_description: "If using bands: From seated, standing, or kneeling position, use a wide grip and pull handles towards chest."
      },
      {
        id: 3,
        workout_id: 1,
        exercise_name: "Military Push-Up",
        exercise_description: "Place hands directly beneath shoulders. Keeping arms and elbows tight against sides, perform standard push-up movement."
      },
      {
        id: 4,
        workout_id: 1,
        exercise_name: "Reverse Grip Chin-Up",
        exercise_description: "If using a chin-up bar: Grasp bar with palms facing body. Pull up until chin clears bar. Lower arms to full extension and repeat. If necessary, modify with one foot on chair.",
        alternate_description: "If using bands: From seated, standing, or kneeling position with a palms-up grip, pull handles towards chest."
      },
      {
        id: 5,
        workout_id: 1,
        exercise_name: "Wide Fly Push-Up",
        exercise_description: "Extend hands 3 inches wider on each side than standard push-up position."
      },
      {
        id: 6,
        workout_id: 1,
        exercise_name: "Closed Grip Overhand Pull-Up",
        exercise_description: "Palms out, narrow grip. Perform standard pull-up motion. If necessary, modify with one foot on chair.",
        alternate_description: "If using bands: From seated, standing, or kneeling position, hold handles close with a palms-down grip and pull towards chest, keeping arms and elbows close to body."
      },
      {
        id: 7,
        workout_id: 1,
        exercise_name: "Decline Push-Up",
        exercise_description: "Feet elevated on chair, step, or bench."
      },
      {
        id: 8,
        workout_id: 1,
        exercise_name: "Heavy Pants",
        exercise_description: "With one foot forward and bent knees, bend at waist, keeping back flat. Lift weights from forward foot up to waist, keeping elbows close to sides.",
        alternate_description: "If using bands: Shorten band by twisting in small loop. Then step on center with front foot. Perform same movement as above."
      },
      {
        id: 9,
        workout_id: 1,
        exercise_name: "Diamond Push-Up",
        exercise_description: "From push-up position, bring hands together so thumbs and index fingers touch. Align hands directly below heart. Elbows will flare out during push-up."
      },
      {
        id: 10,
        workout_id: 1,
        exercise_name: "Lawn Mower (8 to max reps",
        exercise_description: "Side lunge, rest elbow on knee. Pull weight from floor to waist. Repeat on other side.",
        alternate_description: "If using bands: Stagger feet on band with wide-leg stance and pull front handle in same motion as above."
      },

    ])
};
