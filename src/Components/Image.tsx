import * as React from 'react'

export interface ImageProps { size?: number }
//TODO add colors
export const Image = ({ size = 100 }: ImageProps) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width={`${size}px`} height={`${size}px`}><path d='M47.073 512c-12.348 0-24.28-4.856-33.242-13.817-11.4-11.402-16.157-27.615-12.72-43.37L84.885 70.61c3.936-18.057 18.083-32.198 36.04-36.02 100.06-21.31 202.922 9.1 275.16 81.338 72.24 72.24 102.646 175.1 81.33 275.153-3.825 17.954-17.965 32.1-36.02 36.036l-58.21 12.693c-8.357 1.822-16.607-3.476-18.43-11.832-1.823-8.356 3.475-16.608 11.83-18.43l58.21-12.692c6.194-1.35 11.035-6.152 12.33-12.23 19.118-89.748-8.15-182.01-72.94-246.8-64.788-64.79-157.055-92.055-246.81-72.95-6.08 1.297-10.88 6.136-12.23 12.33L31.367 461.41c-1.195 5.486.395 10.905 4.362 14.873 3.97 3.97 9.39 5.564 14.872 4.362l248.56-54.21c8.355-1.82 16.605 3.472 18.428 11.83 1.823 8.356-3.475 16.608-11.83 18.43L57.2 510.904c-3.37.734-6.765 1.095-10.127 1.095z' fill='#507C5C' /><path d='M98.062 86.313c90.34-31.83 195.065-11.69 267.194 60.44s92.27 176.852 60.44 267.193l41.37-8.043c12.88-2.504 22.975-12.678 25.14-25.617 16.13-96.443-12.927-199.042-87.185-273.3S228.167 3.673 131.724 19.802c-12.94 2.165-23.114 12.26-25.617 25.14l-8.044 41.37z' fill='#CFF09E' /><g fill='#507C5C'><path d='M425.695 429.43c-4.453 0-8.75-1.922-11.722-5.368-3.628-4.203-4.728-10.026-2.882-15.262 30.756-87.287 8.467-185.85-56.784-251.097-45.48-45.48-106.05-70.525-170.557-70.525-27.567 0-54.666 4.622-80.543 13.74-5.235 1.844-11.06.746-15.264-2.882-4.203-3.628-6.143-9.227-5.084-14.678L90.9 41.985c3.735-19.2 19.112-34.254 38.263-37.456C147.14 1.523 165.507 0 183.75 0c87.82 0 170.29 34.106 232.22 96.038 74.82 74.82 109.03 182.038 91.51 286.804-3.203 19.153-18.256 34.53-37.455 38.265l-41.373 8.04c-.985.19-1.975.284-2.957.284zM183.75 56.21c72.78 0 141.128 28.267 192.457 79.593 36.966 36.964 62.342 83.453 73.39 134.44 8.88 40.985 8.23 83.238-1.752 123.623l16.268-3.162c6.586-1.28 11.74-6.493 12.822-12.972 15.874-94.918-15.102-192.038-82.86-259.795C337.99 61.855 263.296 30.97 183.75 30.97c-16.537 0-33.183 1.38-49.473 4.105-6.477 1.082-11.69 6.236-12.972 12.822l-3.162 16.267c21.395-5.287 43.37-7.955 65.608-7.955zM133.273 493.952c-5.58 0-10.843-3.027-13.594-8.08-18.897-34.692-12.562-78.456 15.403-106.425 16.964-16.962 39.518-26.304 63.507-26.304s46.543 9.342 63.507 26.304c18.36 18.36 27.865 43.75 26.08 69.664-.474 6.87-5.423 12.6-12.15 14.066l-139.45 30.42c-1.102.24-2.21.356-3.304.356zm65.317-109.837c-15.717 0-30.493 6.12-41.608 17.235-15.61 15.61-20.937 38.72-14.528 59.266l114.513-24.977c-1.607-12.875-7.445-24.967-16.77-34.29-11.114-11.116-25.89-17.235-41.607-17.235zM62.66 324.372c-5.564 0-11.15-.548-16.6-1.626-4.08-.807-7.663-3.22-9.944-6.7s-3.066-7.726-2.18-11.79l29.65-135.97c.885-4.055 3.36-7.584 6.87-9.798 3.512-2.214 7.763-2.927 11.8-1.977 15.353 3.606 29.388 11.43 40.587 22.63 33.17 33.17 33.17 87.142 0 120.312-16.07 16.07-37.443 24.92-60.183 24.92zm27.327-131.795L68.057 293.14c12.427-1.223 23.947-6.65 32.885-15.587 21.097-21.094 21.095-55.42 0-76.514-3.3-3.302-6.984-6.14-10.955-8.463z' /></g><circle cx='265.77' cy='224.56' r='61.94' fill='#CFF09E' /><path d='M265.768 301.987c-42.692 0-77.425-34.733-77.425-77.425s34.733-77.425 77.425-77.425 77.425 34.733 77.425 77.425-34.73 77.425-77.425 77.425zm0-123.88c-25.615 0-46.455 20.84-46.455 46.456s20.84 46.455 46.455 46.455 46.455-20.84 46.455-46.455-20.84-46.455-46.455-46.455z' fill='#507C5C' /></svg>
)