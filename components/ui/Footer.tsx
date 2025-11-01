const Footer = () => {
  return (
    <div className="text-center w-full max-w-[1366px] px-4 md:px-6 lg:px-15 mx-auto  rounded-4xl py-12 md:py-24 ">
      <h1 className="text-[70px] md:text-[120px] lg:text-[200px] text-transparent bg-clip-text tracking-tighter bg-gradient-to-t from-gray-300 to-gray-500">
        Vorbit
      </h1>
      <p className=" text-sm text-gray-500">
        Made by{" "}
        <a
          href="https://github.com/Vatsa10" // <-- Replace with your actual X/Twitter handle URL
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700 transition-colors"
        >
          Vatsa
        </a>
      </p>
    </div>
  );
};

export default Footer;
