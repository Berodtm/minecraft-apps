import React from 'react';

function Table(props) {
    return (
      <table className="table-auto text-left border-spacing-2 w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th scope='col' className="px-4 py-2 border"> {props.colHeadA} </th>
            <th scope='col' className="px-4 py-2 border"> {props.colHeadB} </th>
            <th scope='col' className="px-4 py-2 border"> {props.colHeadC} </th>
            <th scope='col' className="px-4 py-2 border"> {props.colHeadD} </th>
          </tr>
        </thead>
        <tbody>
          {props.filteredSearch.map((food) => {
            return (
              <tr key={food.id} className="hover:bg-gray-100">
                <td scope='col' className="px-4 py-2 border"> {food.id} </td>
                <td scope='col' className="px-4 py-2 border"> {food.name} </td>
                <td scope='col' className="px-4 py-2 border"> {food.hearts} </td>
                <td scope='col' className="px-4 py-2 border"> {food.other} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}
export default Table;
