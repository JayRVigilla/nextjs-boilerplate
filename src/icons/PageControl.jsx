/**
 * color defined by step prop.
 * @param step - number
 */
export const PageControlIcon = ({ step=1 }) => {
  const inertColor = "#CFCBE0";
  const activeColor = "#1D1A2B";

  return (
    <svg
      width="370"
      height="16"
      viewBox="0 0 370 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1369_5559)">
        <circle
          cx="161"
          cy="8"
          r="8"
          fill={step >= 1 ? activeColor : inertColor}
          className="step-one"
        />
        <path
          d="M162.22 4.5459V11.3338H160.785V5.90811H160.745L159.191 6.88255V5.60982L160.871 4.5459H162.22Z"
          fill="white"
        />
      </g>
      <g clipPath="url(#clip1_1369_5559)">
        <circle
          cx="185"
          cy="8"
          r="8"
          fill={step >= 2 ? activeColor : inertColor}
          className="step-two"
        />
        <path
          d="M182.611 11.3338V10.2997L185.027 8.0625C185.232 7.86364 185.405 7.68466 185.544 7.52557C185.685 7.36648 185.793 7.2107 185.865 7.05824C185.938 6.90357 185.975 6.73674 185.975 6.55777C185.975 6.3589 185.93 6.18766 185.839 6.04403C185.748 5.8982 185.625 5.78662 185.468 5.70928C185.311 5.62973 185.133 5.58996 184.934 5.58996C184.726 5.58996 184.545 5.63194 184.391 5.71591C184.236 5.79987 184.117 5.9203 184.033 6.07718C183.949 6.23406 183.907 6.42077 183.907 6.63731H182.544C182.544 6.19318 182.645 5.80761 182.846 5.48059C183.047 5.15357 183.329 4.90057 183.691 4.72159C184.054 4.54261 184.471 4.45312 184.944 4.45312C185.43 4.45312 185.853 4.5393 186.213 4.71165C186.576 4.88179 186.858 5.11821 187.059 5.42093C187.26 5.72364 187.36 6.07055 187.36 6.46165C187.36 6.71796 187.309 6.97096 187.208 7.22064C187.108 7.47033 186.93 7.74763 186.674 8.05256C186.418 8.35527 186.057 8.71875 185.59 9.14299L184.599 10.1141V10.1605H187.45V11.3338H182.611Z"
          fill="white"
        />
      </g>
      <g clipPath="url(#clip2_1369_5559)">
        <circle
          cx="209"
          cy="8"
          r="8"
          fill={step >= 3 ? activeColor : inertColor}
          className="step-three"
        />
        <path
          d="M208.983 11.4266C208.488 11.4266 208.047 11.3415 207.661 11.1714C207.276 10.9991 206.972 10.7626 206.749 10.4621C206.528 10.1594 206.414 9.81029 206.408 9.41477H207.853C207.862 9.58049 207.916 9.72633 208.015 9.85227C208.117 9.97601 208.252 10.0721 208.42 10.1406C208.587 10.2091 208.776 10.2434 208.986 10.2434C209.205 10.2434 209.398 10.2047 209.566 10.1274C209.734 10.05 209.866 9.94287 209.961 9.80587C210.056 9.66888 210.103 9.51089 210.103 9.33191C210.103 9.15073 210.052 8.99053 209.951 8.85133C209.851 8.70991 209.708 8.59943 209.52 8.51989C209.334 8.44034 209.113 8.40057 208.857 8.40057H208.224V7.34659H208.857C209.074 7.34659 209.265 7.30903 209.43 7.2339C209.598 7.15878 209.729 7.05492 209.822 6.92235C209.914 6.78756 209.961 6.63068 209.961 6.4517C209.961 6.28157 209.92 6.13242 209.838 6.00426C209.759 5.8739 209.646 5.77225 209.5 5.69934C209.356 5.62642 209.188 5.58996 208.996 5.58996C208.802 5.58996 208.624 5.62532 208.463 5.69602C208.301 5.76452 208.172 5.86285 208.075 5.991C207.978 6.11916 207.926 6.26941 207.919 6.44176H206.544C206.55 6.05066 206.662 5.70597 206.878 5.40767C207.095 5.10938 207.387 4.87626 207.753 4.70833C208.122 4.53819 208.539 4.45312 209.003 4.45312C209.471 4.45312 209.881 4.53819 210.233 4.70833C210.584 4.87847 210.857 5.10827 211.051 5.39773C211.248 5.68497 211.345 6.00758 211.343 6.36553C211.345 6.74558 211.227 7.06266 210.988 7.31676C210.752 7.57087 210.444 7.73217 210.063 7.80066V7.85369C210.563 7.91777 210.943 8.09122 211.204 8.37405C211.467 8.65467 211.597 9.006 211.595 9.42803C211.597 9.81471 211.485 10.1583 211.26 10.4588C211.037 10.7593 210.729 10.9957 210.335 11.1681C209.942 11.3404 209.491 11.4266 208.983 11.4266Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1369_5559">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(153)"
          />
        </clipPath>
        <clipPath id="clip1_1369_5559">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(177)"
          />
        </clipPath>
        <clipPath id="clip2_1369_5559">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(201)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};