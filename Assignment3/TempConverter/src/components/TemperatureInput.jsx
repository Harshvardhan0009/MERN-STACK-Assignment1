const TemperatureInput = ({ label, value, onChange }) => {
    return (
        <div className="input-group">
            <label>{label}:</label>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={`Enter ${label}`}
            />
        </div>
    );
};

export default TemperatureInput;
