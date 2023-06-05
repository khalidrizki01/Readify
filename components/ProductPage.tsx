import { useState } from "react";
import Link from "next/link";

interface Product {
  title: string;
  synopsis: string;
  author: string;
  stock: number;
}

const ProductPage = () => {
  const [product, setProduct] = useState<Product>({
    title: "Judul Buku",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod justo vitae libero facilisis malesuada. Sed a mi faucibus, gravida risus vitae, venenatis lorem. Nam sed imperdiet massa.",
    author: "Penulis",
    stock: 10,
  });

  const handleAddToLoan = () => {
    // Implementasi logika penambahan buku ke daftar pinjaman
  };

  const handleAddToWishlist = () => {
    // Implementasi logika penambahan buku ke wishlist
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-center items-center">
          <img
            src="https://via.placeholder.com/150x200"
            alt={product.title}
            className="w-1/4 h-auto rounded-lg shadow-md"
          />
          <div className="ml-6 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <h2 className="text-lg font-medium mb-2">
                Penulis: {product.author}
              </h2>
              <p className="text-gray-700 text-base mb-2">{product.synopsis}</p>
              <p className="text-gray-700 text-base mb-2">
                Stock: {product.stock} buku
              </p>
              <div className="flex items-center mb-4">
                {product.stock > 0 ? (
                  <p className="text-green-500 font-medium">In Stock</p>
                ) : (
                  <p className="text-red-500 font-medium">Out of Stock</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2"
                disabled={product.stock === 0}
              >
                <Link href="/readbook">Loan</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
