import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Toast() {
  const onClickHandler = () => {
    toast.success('Api data succcessfully received!', {
      duration: 4000,
      position: 'top-right',

      // Custom Icon
      icon: '👏',
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#0a0',
        secondary: '#fff',
      },
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  };

  const onClickSuccessHandler = () => {
    toast.success('Custom toast message!', {
      duration: 4000,
      position: 'top-right',

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#0a0',
        secondary: '#fff',
      },
      // styling
      style: {
        border: '1px solid #713200',
        padding: '5px 10px',
        color: '#713200',
        // minWidth: '300px'
      },
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  };

  const onClickErrorHandler = () => {
    toast.error('Api data posting error!', {
      duration: 4000,
      position: 'top-right',

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#f00',
        secondary: '#fff',
      },
      // styling
      style: {
        border: '1px solid #713200',
        padding: '5px 10px',
        color: '#713200',
        // minWidth: '300px'
      },
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  };

  const onClickLoadingHandler = () => {
    toast.loading('Api data posting error!', {
      duration: 4000,
      position: 'top-right',

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#00f',
        secondary: '#fff',
      },
      // styling
      style: {
        border: '1px solid #713200',
        padding: '5px 10px',
        color: '#713200',
        // minWidth: '300px'
      },
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  };

  const onClickPromiseHandler = () => {
    const apiPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: 'okay' });
        // reject(new Error('System error!'));
      }, 4000);
    });

    toast.promise(
      apiPromise,
      {
        loading: 'Loading',
        success: 'Got the data',
        error: 'Error when fetching',
      },
      {
        duration: 10000,
        position: 'top-right',

        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#0ff',
          secondary: '#fff',
        },
        // styling
        style: {
          border: '1px solid #713200',
          padding: '5px 10px',
          color: '#713200',
          minWidth: '200px',
        },
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      }
    );
  };

  return <Toaster />;
}

export default Toast;
