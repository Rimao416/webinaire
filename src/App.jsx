import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-white animate-bounce">
        Bienvenue !
      </h1>
      <p className="mt-4 text-xl text-gray-200 text-center">
        Nous sommes ravis de vous accueillir à notre formation.
      </p>
      <p className="mt-2 text-lg text-gray-200 text-center">
        Prêt à commencer votre voyage ? 🚀
      </p>
      <button className="mt-8 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-100 transition duration-300">
        Commencer
      </button>
    </div>
  );
}

export default App;