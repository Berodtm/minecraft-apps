// CordInputs.jsx

function formatLabel(name) {
    // Regex to split the name at uppercase letters or digits, handling cases like "netherX"
    const parts = name.split(/(?=[A-Z0-9])/);
    const label = parts.map(part => {
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();  // Ensure correct capitalization
    }).join(" ");
    return `${label}`;
}
  function Inputfield({ htmlFor, name, placeholder, onChange, value, onFocus, onBlur }) {
      const formattedLabel = formatLabel(name);  // Format the label text
      return (
          <div className="mb-3">
              <label className="block text-gray-800 font-bold mb-1" htmlFor={htmlFor}>
                  {formattedLabel} {/* Display the formatted label */}
              </label>
              <input
                  id={htmlFor}
                  name={name}
                  type='number'
                  placeholder={placeholder}
                  onChange={onChange}
                  value={value}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  className="bg-gray-200 shadow appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              />
          </div>
      );
  }
  
  export default Inputfield;