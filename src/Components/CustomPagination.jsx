import { Box, Pagination } from '@mui/material';

const CustomPagination = ({ count, page, onChange }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <Pagination 
                count={count} 
                page={page} 
                onChange={onChange} 
                sx={{
                    '& .Mui-selected': {
                        backgroundColor: '#0C7230', 
                        color: '#FFF', 
                    },
                }}
            />
        </Box>
    );
};

export default CustomPagination;
