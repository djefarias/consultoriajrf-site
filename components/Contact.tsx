// components/Contact.tsx

export default function Contact() {
  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Entre em Contato</h2>
        <form
          action="https://formspree.io/f/xovyaqjb"
          method="POST"
          className="space-y-4 bg-white p-6 rounded shadow"
        >
          <div>
            <label className="block text-gray-700">Nome</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Mensagem</label>
            <textarea
              name="message"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows={5}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
