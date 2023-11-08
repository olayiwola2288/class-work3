import React from "react";

function Map() {
  let allStudent = [
    { firstName: "Sera", lastName: "fola", age: 20 },
    { firstName: "Salaudeen", lastName: "Tunde", age: 24 },
    { firstName: "Abdullahi", lastName: "Alade", age: 40 },
  ];
  return (
    <div>
      <div className="md:px-32 py-8 w-full">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  firstName
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  lastName
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Age
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {allStudent.map((item, index) => (
                <tr key={index}>
                  <td className="w-1/3 text-left py-3 px-4">
                    {item.firstName}
                  </td>
                  <td className="w-1/3 text-left py-3 px-4">{item.lastName}</td>
                  <td className="w-1/3 text-left py-3 px-4">
                    <a className="hover:text-blue-500">{item.age}</a>
                  </td>
                  <td className="w-1/3 text-left py-3 px-4">
                    <button className="rounded-md bg-yellow-300 p-2 px-4">
                      Edit
                    </button>
                    <button className="rounded-md bg-red-500 p-2 px-4 my-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Map;
