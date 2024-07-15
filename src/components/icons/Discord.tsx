import { memo } from 'react';

function _Discord({
  width,
  height,
  fill,
  className = '',
}: {
  width?: number | string;
  height?: number | string;
  fill?: string;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M25.6928 7.10738C23.9195 6.28071 21.9995 5.68071 19.9995 5.33405C19.982 5.33348 19.9645 5.33678 19.9484 5.34369C19.9323 5.3506 19.9179 5.36096 19.9062 5.37405C19.6662 5.81405 19.3862 6.38738 19.1995 6.82738C17.0782 6.50738 14.9208 6.50738 12.7995 6.82738C12.6128 6.37405 12.3328 5.81405 12.0795 5.37405C12.0662 5.34738 12.0262 5.33405 11.9862 5.33405C9.98617 5.68071 8.0795 6.28071 6.29284 7.10738C6.2795 7.10738 6.26617 7.12071 6.25284 7.13405C2.62617 12.5607 1.62617 17.8407 2.11951 23.0674C2.11951 23.094 2.13284 23.1207 2.15951 23.134C4.5595 24.894 6.86617 25.9607 9.14617 26.6674C9.18617 26.6807 9.22617 26.6674 9.2395 26.6407C9.77284 25.9074 10.2528 25.134 10.6662 24.3207C10.6928 24.2674 10.6662 24.214 10.6128 24.2007C9.85284 23.9074 9.13284 23.5607 8.42617 23.1607C8.37284 23.134 8.37284 23.054 8.41284 23.014C8.5595 22.9074 8.70617 22.7874 8.85284 22.6807C8.8795 22.654 8.91951 22.654 8.94617 22.6674C13.5328 24.7607 18.4795 24.7607 23.0128 22.6674C23.0395 22.654 23.0795 22.654 23.1062 22.6807C23.2528 22.8007 23.3995 22.9074 23.5462 23.0274C23.5995 23.0674 23.5995 23.1474 23.5328 23.174C22.8395 23.5874 22.1062 23.9207 21.3462 24.214C21.2928 24.2274 21.2795 24.294 21.2928 24.334C21.7195 25.1474 22.1995 25.9207 22.7195 26.654C22.7595 26.6674 22.7995 26.6807 22.8395 26.6674C25.1328 25.9607 27.4395 24.894 29.8395 23.134C29.8662 23.1207 29.8795 23.094 29.8795 23.0674C30.4662 17.0274 28.9062 11.7874 25.7462 7.13405C25.7328 7.12071 25.7195 7.10738 25.6928 7.10738ZM11.3595 19.8807C9.98617 19.8807 8.83951 18.614 8.83951 17.054C8.83951 15.494 9.95951 14.2274 11.3595 14.2274C12.7728 14.2274 13.8928 15.5074 13.8795 17.054C13.8795 18.614 12.7595 19.8807 11.3595 19.8807ZM20.6528 19.8807C19.2795 19.8807 18.1328 18.614 18.1328 17.054C18.1328 15.494 19.2528 14.2274 20.6528 14.2274C22.0662 14.2274 23.1862 15.5074 23.1728 17.054C23.1728 18.614 22.0662 19.8807 20.6528 19.8807Z"
        fill="black"
      />
    </svg>
  );
}

export const Discord = memo(_Discord);
