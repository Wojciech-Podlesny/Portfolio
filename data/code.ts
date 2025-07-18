export const code = `const profile = {
  name: 'Wojciech Podleśny',
  title: 'FullStack Developer | Creative Coder | Problem Solver',
  skills: [
    'React', 'NextJS', 'Typescript', 'Javascript',
    'MySQL', 'MongoDB', 'Docker', 'AWS',
    'GraphQL', 'Git',
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 2,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5 &&
      this.yearsOfExperience >= 3
    );
  }
};`;