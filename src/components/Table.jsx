import React from 'react';

function Table({ colHeadA, colHeadB, colHeadC, colHeadD, filteredSearch }) {
  return (
    <table className="table-auto text-left border-spacing-2 w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th scope='col' className="px-4 py-2 border"> {colHeadA} </th>
          <th scope='col' className="px-4 py-2 border"> {colHeadB} </th>
          <th scope='col' className="px-4 py-2 border"> {colHeadC} </th>
          <th scope='col' className="px-4 py-2 border"> {colHeadD} </th>
        </tr>
      </thead>
      <tbody>
        {filteredSearch.map((food) => (
            <tr key={food.id} className="hover:bg-gray-100">
              <td scope='col' className="px-4 py-2 border"> {food.id} </td>
              <td scope='col' className="px-4 py-2 border"> {food.name} </td>
              <td scope='col' className="px-4 py-2 border"> {food.hearts} </td>
              <td scope='col' className="px-4 py-2 border"> {food.other} </td>
            </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
