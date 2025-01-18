import React from "react";

const UsVsThem = () => {
  return (
    <section className="py-12  flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-8">US VS THEM</h2>
      <div className="w-full max-w-4xl">
        <div className="rounded-lg shadow-lg ">
          <table className="w-full text-center border-collapse">
            <thead className="bg-blue-50">
              <tr>
                <th className="p-4 border-b font-semibold"></th>
                <th className="p-4 border-b font-semibold text-blue-900">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <img
                      src="/path/to/wildwonder-can.png"
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
                <td className="p-4 border-b">Live Probiotics</td>
                <td className="p-4 border-b">1 billion CFUs</td>
                <td className="p-4 border-b">✘</td>
                <td className="p-4 border-b">✘</td>
              </tr>
              <tr>
                <td className="p-4 border-b">Fiber</td>
                <td className="p-4 border-b">5g (20% DV)</td>
                <td className="p-4 border-b">✘</td>
                <td className="p-4 border-b">✘</td>
              </tr>
              <tr>
                <td className="p-4 border-b">Sugar</td>
                <td className="p-4 border-b">6g</td>
                <td className="p-4 border-b">40g</td>
                <td className="p-4 border-b">16g</td>
              </tr>
              <tr>
                <td className="p-4 border-b">Calories</td>
                <td className="p-4 border-b">35</td>
                <td className="p-4 border-b">160</td>
                <td className="p-4 border-b">60</td>
              </tr>
              <tr>
                <td className="p-4 border-b">Delicious & Refreshing</td>
                <td className="p-4 border-b">Yes</td>
                <td className="p-4 border-b">Sometimes</td>
                <td className="p-4 border-b">No</td>
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
