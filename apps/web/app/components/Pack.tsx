export function PacksComponent() {
  const packs = [
    {
      id: 1,
      name: "Valentine's Day Pack",
      description: "Romantic themes and settings perfect for Valentine's Day",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$9.99"
    },
    {
      id: 2,
      name: "Airplane Pack",
      description: "Aviation themes with planes, airports, and sky backgrounds",
      image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$12.99"
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Theme Packs</h2>
        <p className="text-slate-300">Pre-made themes to enhance your image generation</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {packs.map((pack) => (
          <div key={pack.id} className="bg-slate-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-orange-500 transition-all">
            <div className="aspect-video bg-slate-700">
              <img 
                src={pack.image} 
                alt={pack.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{pack.name}</h3>
              <p className="text-slate-300 mb-4">{pack.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-500">{pack.price}</span>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
