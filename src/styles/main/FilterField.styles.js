export const filterTextField = () => ({
    width: '100%',
    height: '40px',
    '& .MuiOutlinedInput-root': { height: '100%' },
    '& .MuiInputLabel-root': {
      transform: 'translate(14px, 10px) scale(1)',
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(14px, -9px) scale(0.75) !important',
    }
  });

  export const filterCommonFields = (theme) => ({

    height: '40px',
    // Responsive
    [theme.breakpoints.up('xs')]: { width: '180px' },
    [theme.breakpoints.up('sm')]: { width: '180px' },
    [theme.breakpoints.up('md')]: { width: '220px' },
    [theme.breakpoints.up('lg')]: { width: '280px' },
    [theme.breakpoints.up('xl')]: { width: '320px' },
  });