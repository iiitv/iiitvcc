import React, { useEffect } from 'react';
import Image from 'next/image';
import { CrossCircledIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';
import styles from './alert.module.css';

interface AlertProps {
  status: string;
  message: string | null;
  className?: string;
  children?: React.ReactNode;
}

const errorIcon = <CrossCircledIcon className="stroke-current stroke-[.4]" height={28} width={28} />;
const successIcon: React.ReactNode = <Image src="CheckIcon.svg" alt="check-circle" height={28} width={28} />;
const warningIcon = <ExclamationTriangleIcon className="stroke-current stroke-[.4]" height={28} width={28} />;

const colorcode: { [key: string]: (string | JSX.Element)[] } = {
  'success': [styles.green, successIcon],
  'warning': [styles.orrange, warningIcon],
  'error': [styles.red, errorIcon],
}

export default function Alert({status, message, className, children, ...props } : AlertProps & React.HTMLAttributes<HTMLDivElement>) {
  useEffect(() => {
    const errorBox = document.getElementById('error_box') as HTMLDivElement;
    if (errorBox) {
      errorBox.classList.add(styles.error_box_active);
      setTimeout(() => {
          errorBox.classList.remove(styles.error_box_active);
      }, 4000);
    }
  }, []);

  return (
    message && message !== 'null' &&
    <div className={styles.error_container}>
      <div className={`${styles.error_box} ${colorcode[status] ? colorcode[status][0]: styles.blue} ${className}`} id="error_box" {...props} >
        {colorcode[status] ? colorcode[status][1] : ''}
        <div className={styles.message}>{message}</div>
        {children}
      </div>
    </div>
  )
}