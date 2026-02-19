import { useState, useEffect } from 'react';

export const useSearch = (data, searchTerm) => {
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        if (!searchTerm) {
            setFilteredData(data);
        } else {
            const filtered = data.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filtered);
        }
    }, [searchTerm, data]);

    return filteredData;
};
