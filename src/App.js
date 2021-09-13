function App() {
  return (
    <main className="min-h-screen min-w-screen bg-gray-100 flex justify-end">
      <div className="h-screen w-1/4 bg-yellow-300 fixed flex flex-col items-center justify-center space-y-6 left-0 top-0">
        <div
          className="h-48 w-48 rounded-full bg-white"
          style={{ border: "7px solid rgba(253, 230, 138,0.99)" }}
        ></div>
        <div className="text-center space-y-2">
          {links.map((link, index) => (
            <p className="uppercase font-semibold text-xl text-gray-200 hover:text-white cursor-pointer" key={index}>
              {link}
            </p>
          ))}
          <p></p>
        </div>
      </div>
      <div className="w-3/4">asddsa</div>
    </main>
  );
}

const links = [
  "about",
  "experience",
  "education",
  "skills",
  "interest",
  "awards",
];

export default App;
