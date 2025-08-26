export const code = `const profile = {
  name: 'Wojciech Podleśny',
  title: 'Frontend Developer | Creative Coder | Problem Solver',
  skills: [
    'React', 'NextJS', 'Typescript', 'Javascript',
    'Node,js','Tailwind CSS',
    'Docker', 'Git',
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 3,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5 &&
      this.yearsOfExperience >= 3
    );
  }
};`;