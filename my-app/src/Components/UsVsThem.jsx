import React from "react";

const UsVsThem = () => {
  return (
    <section className="py-12  flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-8">US VS THEM</h2>
      <div className="w-full max-w-4xl">
        <div className="rounded-lg  ">
          <table className="w-full text-center border-collapse">
            <thead className="">
              <tr>
                <th className="p-4 border-b-4 font-semibold"></th>
                <th className="p-4 border-b-4 font-semibold text-blue-900">
                  <div className="bg-custom-blue p-4 rounded-lg">
                    <img
                      src="https://drinkwildwonder.com/cdn/shop/files/Botanical.png?height=105&v=1718399818&width=105"
                      alt="wildwonder can"
                      className="mx-auto mb-2"
                    />
                    <span>wildwonder</span>
                  </div>
                </th>
                <th className="p-4 border-b font-semibold text-blue-900">
                  Soda
                </th>
                <th className="p-4 border-b font-semibold text-blue-900">
                  Kombucha
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b-4">Live Probiotics</td>
                <td className="p-4 border-b-4">1 billion CFUs</td>
                <td className="p-4 border-b-4">✘</td>
                <td className="p-4 border-b-4">✘</td>
              </tr>
              <tr>
                <td className="p-4 border-b-4">Fiber</td>
                <td className="p-4 border-b-4">5g (20% DV)</td>
                <td className="p-4 border-b-4">✘</td>
                <td className="p-4 border-b-4">✘</td>
              </tr>
              <tr>
                <td className="p-4 border-b-4">Sugar</td>
                <td className="p-4 border-b-4">6g</td>
                <td className="p-4 border-b-4">40g</td>
                <td className="p-4 border-b-4">16g</td>
              </tr>
              <tr>
                <td className="p-4 border-b-4">Calories</td>
                <td className="p-4 border-b-4">35</td>
                <td className="p-4 border-b-4">160</td>
                <td className="p-4 border-b-4">60</td>
              </tr>
              <tr>
                <td className="p-4 border-b-4">Delicious & Refreshing</td>
                <td className="p-4 border-b-4">Yes</td>
                <td className="p-4 border-b-4">Sometimes</td>
                <td className="p-4 border-b-4">No</td>
              </tr>
              <tr>
                <td className="p-4">Organic</td>
                <td className="p-4">Yes</td>
                <td className="p-4">No</td>
                <td className="p-4">Sometimes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UsVsThem;
