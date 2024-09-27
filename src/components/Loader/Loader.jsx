import { Box, Skeleton } from '@mui/material';

const Loader = () => {
  const rows = 5; // Number of table rows
  const columns = 4; // Number of table columns
  const skeletonHeight = 40; // Height for each skeleton row
  const columnWidths = ['20%', '20%', '30%', '30%']; // Widths for each column

  return (
    <div className='py-10'>
        <Box sx={{ width: 1240, height: 'auto' }}>
            <Box sx={{ display: 'flex', mb: 2 }}>
                {columnWidths.map((width, index) => (
                <Skeleton key={index} variant="rectangular" width={width} height={skeletonHeight} />
                ))}
            </Box>
            
            {[...Array(rows)].map((_, rowIndex) => (
                <Box key={rowIndex} sx={{ display: 'flex', mb: 2 }}>
                {columnWidths.map((width, colIndex) => (
                    <Skeleton key={colIndex} variant="rectangular" width={width} height={skeletonHeight} />
                ))}
                </Box>
            ))}
        </Box>
    </div>
  );
};

export default Loader;
