import momentum from "../../Images/Classical_mechanics/momentum.jpg";
import friction from "../../Images/Classical_mechanics/friction.jpg";
import gravitation from "../../Images/Classical_mechanics/gravitation.jpg";
import force from "../../Images/Classical_mechanics/force.jpg";
import error_measurement from "../../Images/Classical_mechanics/error.jpg";
import torque from "../../Images/Classical_mechanics/torque.jpg";
import work_power_energy from "../../Images/Classical_mechanics/wpe.jpg";
import kinematics from "../../Images/Classical_mechanics/kinematics.jpg";
import collision from "../../Images/Classical_mechanics/collision.jpg";
import moment_of_inertia from "../../Images/Classical_mechanics/moment of inertia/momentOfInertia.jpg";

export {
  momentum,
  force,
  friction,
  gravitation,
  torque,
  error_measurement,
  work_power_energy,
  moment_of_inertia,
  kinematics,
};

const Topics = [
  {
    topic: "Momentum",
    image: momentum,
    details: `Momentum is a vector quantity, defined as the product of the mass of a particle and its velocity. From Isaac Newton’s second law of motion we can see that the rate of change of momentum is equal to the force acting on the particle.
        

        From Newton’s second law it follows that, if a constant force acts on a particle for a given time, the product of force and the time interval is equal to the change in the momentum. Conversely, the momentum of a particle is a measurement of the time, required for a constant force to bring it to rest.`,
    formula: "p = mv",
    process:
      "Here, the linear momentum is defined by p, m is the mass of the system and v is its velocity. We can calculate the momentum (p) by multiplying Mass of the particle (m) with the velocity of the particle (v).",
    siunit: "kg · m/s",
    dimension: "ML/T",
  },
  {
    topic: "Force",
    image: force,
    details: ` 
        Force is an external agent capable of changing the state of rest or motion of a particular body. It has a magnitude and a direction. The direction towards which the force is applied is known as the direction of the force and the application of force is the point where force is applied. 
        The Force can be measured using a spring balance.                                             
        Force has different effects and here are some of them, 
        Force can make a body that is at rest to move.
        It can stop a moving body or slow it down.
        It can accelerate the speed of a moving body.
        It can also change the direction of a moving body along with its shape and size.

        `,
    formula: "f = ma",
    process: `The force (F) required to move an object of mass (m) with an acceleration (a) is given by the formula F = m x a. So, force = mass multiplied by acceleration.`,
    siunit: "N or Kg.m.s²",
    dimension: "ML/T²",
  },
  {
    topic: "Friction",
    image: friction,
    details: `Friction is a force that resists the sliding or rolling of one solid object over another.
        Surface of an object is microscopically irreguler, thats why, when any two objects in contact try to be in motion relatively with the another one, a force apears at their contact point resisting the motion, this force is opposite to the direction of motion.`,
    formula: "F = μN",
    process: `F, is the frictional force, N is the normal force. The the friction is calculated by F = μN.
        
        μ is the coefficient of friction, when the two objects are in relative motion, we call it coefficient of kinetic friction and when they are static, it is called the static friction coefficient.`,
    siunit: "kg · m/s",
    dimension: "ML/T²",
  },
  {
    topic: "Gravitation",
    image: gravitation,
    details: "....",
  },
  {
    topic: "Error Measurements",
    image: error_measurement,
    details:
      "Any measurement that you make is just an approximation, 100% accuracy is not possible. If you measure the same object two different times, the two measurements may not be exactly the same.  The difference between the two measurements is called a variation in the measurements. This variation introduces an unwanted but unavoidable uncertainty in our measurement. This uncertainty is called the Errors in measurement. This ‘error’ should not be confused with a ‘mistake’. Error, unlike mistake, does not mean that you got the wrong answer. It just means you didn’t get as close to the true value as possible. The errors in measurement are a mathematical way to show the uncertainty in the measurement.  It is the difference between the result of the measurement and the true value of what you were measuring. Absolute , Relative and Percentage error are three types of error with which every experimental scientist should be familiar.",

    formula: [
      "E (Abs) = | X (measured) - X (actual) | ",
      <br />,
      "E(Rel) = E(Abs) / X(actual) & ",
      "E(Per) = E(Rel) * 100% ",
    ],
    process:
      "Absolute error in measurement refers to the actual amount of error in the measurement. " +
      "The absolute error of the measurement shows how large the error actually is. Relative error represents the ratio of the absolute error of the measurement to the accepted measurement. " +
      "This way we can determine the magnitude of the absolute error in terms of the actual size of the measurement. Errors in measurement may also be expressed in terms of percentage. This is similar to relative error except that the error here is converted to a percent value. The percentage error is found by multiplying the relative error by 100%.",
    siunit: "NA",
    dimension: "NA",
  },
  {
    topic: "Torque",
    image: torque,
    details: `Torque is the measure of the force that can cause an object to rotate about an axis. Force is what causes an object to accelerate in linear kinematics. Similarly, torque is what causes an angular acceleration. Hence, torque can be defined as the rotational equivalent of linear force. The point where the object rotates is called the axis of rotation. In physics, torque is simply the tendency of a force to turn or twist. Different terminologies such as moment or moment of force are interchangeably used to describe torque.`,
    formula: "T = F.r. sinθ",
    process: `A simple way to calculate the magnitude of the torque is to first determine the lever arm and then multiply it times the applied force.

        Now, from the above observation, we conclude that torque produced depends on the magnitude of the force and the perpendicular distance between the point about which torque is calculated and the point of application of force.`,
    siunit: "N.m",
    dimension: "ML²/T²",
  },
  {
    topic: "Work Power Energy",
    image: work_power_energy,
    details: "....",
  },
  {
    topic: "Collision",
    image: collision,
    details: [
      "Collision is known as the sudden but short interaction of two or more than two bodies to exert a mutual influence, usually by exchanging energy. For example, two biliard balls, a hammer and a nail etc. ",
      <br />,
      <br />,
      "There are three types of collision, Perfectly elastic, Partially elastic and Perfectly inelastic.",
      <br />,

      "In perfectly elastic collision, two bodies bounces off without any loss in kinetic energy or momentum, for example: a hard cricket ball hitting a hard surface. ",
      <br />,

      "In partially elastic collision kinetic energy is not conserved but momentum is, for example: a soft tennis ball hitting a hard surface.",

      " And in perfectly inelastic collision, the bodies stick together and moves at a common speed, as the momentum is conserved but kinetic energy is lost, for example: when a ball of clay is dropped.",
    ],

    formula: "m1u1 + m2u2 = m1v1 + m2v2",
    process:
      "Use the first object's mass(m1), initial velocity(u1), final velocity(v1) and second object's mass(m1), initial velocity(u2) to find out the unknown velocity of the second object(v2).",
    siunit: "m/s",
    dimension: "L/S",
  },
  {
    topic: "Moment of Inertia",
    image: moment_of_inertia,
    details: "...",
  },
  {
    topic: "Circular Motion",
  },
  {
    topic: "Torque",
  },
  {
    topic: "Work Power Energy",
  },
  {
    topic: "Kinematics",
    image: kinematics,
    details: `Kinematics is a subfield of physics, developed in classical mechanics, that describes the motion of points, bodies (objects), and systems of bodies (groups of objects) without considering the forces that cause them to move.Kinematics, as a field of study, is often referred to as the "geometry of motion" and is occasionally seen as a branch of mathematics.A kinematics problem begins by describing the geometry of the system and declaring the initial conditions of any known values of position, velocity and/or acceleration of points within the system. Then, using arguments from geometry, the position, velocity and acceleration of any unknown parts of the system can be determined. The study of how forces act on bodies falls within kinetics, not kinematics.`,
    formula: ["v=v₀​+a.t & Δx=v​₀.t+1/2.​a.t² & (v)²=(v₀)²​+2.a.Δx"],
    process: `In kinematics there are three 3 fundamental equations of motion as mentioned above. Each equation consists of different physical quantities and can be used to determine the missing value if all other values are already known. Some scenarios may need the utilzation of more than one equations. These can be used to solve real life problems like vehicular motion, projectile motion, falling motion and can also be used to derive more complex equation often used in higher Physics.`,
    siunit: "m , m/s , s , m/s²",
    dimension: "M , M/T , T , M/T²",

  },
];

export default Topics;
