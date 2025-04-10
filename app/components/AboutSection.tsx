const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-center text-4xl font-bold text-white">About Me</h2>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-lg text-gray-300">
              I'm a dedicated Web Developer with a solid foundation in front-end development and a growing passion for crafting responsive, user-centric web experiences. I specialize in technologies like HTML, CSS, JavaScript, and WordPress.
            </p>
            <p className="text-lg text-gray-300">
              From designing interfaces to optimizing performance, I bring creativity and precision to every project. I'm always eager to learn and adapt to new tools, ensuring high-quality solutions tailored to client needs.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800/50 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-semibold text-white">Experience</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-medium text-white">Web Developer</h4>
                <p className="text-gray-400">Self-Employed • Jan 2024 - Present</p>
              </li>
              <li>
                <h4 className="font-medium text-white">Web Designer</h4>
                <p className="text-gray-400">WE MOVE LOGISTICS, Ghana • Apr 2022 - Dec 2023</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
