const CharacterDisplay = ({ totalChars, remainingChars, showWarning }) => {
    return (
        <div className="character-info">
            <p>Characters: {totalChars}</p>
            <p>Remaining: {remainingChars}</p>
            {showWarning && (
                <p className="warning">⚠ Only {remainingChars} characters left!</p>
            )}
        </div>
    );
};

export default CharacterDisplay;
