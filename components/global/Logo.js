import {media} from "../../utils/media";


const Logo = ({color='white', width=media(50, 55), height=media(50, 55)}) => {

    return (
        <svg width={width} height={height} viewBox="0 0 142 57" fill="red" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.96307 9.75835C6.49049 9.4644 26.0365 5.40286 29.6591 4.62651C31.2391 4.28801 32.8311 4.00619 33.1966 4.00005C33.5731 3.99391 36.22 4.54884 39.3011 5.27994C43.7743 6.34126 50.321 7.87213 51.8334 8.21034C52.3746 8.33141 53 9.04253 53 9.53678C53 10.1508 52.7774 10.6505 52.392 10.9015C52.2084 11.021 46.6307 12.2793 39.9969 13.6975C33.3631 15.1159 25.9964 16.6919 23.6264 17.1997C21.2564 17.7077 19.1619 18.1231 18.9719 18.1231C18.782 18.123 15.938 16.8926 12.6519 15.3887C8.12048 13.3151 6.54938 12.6579 6.14778 12.6683C4.65023 12.7072 3.48376 13.4998 3.15541 14.7017C2.96049 15.4156 3.03303 16.9452 3.31427 18.0469C3.44857 18.5728 3.66503 18.9189 4.15267 19.3872C4.73138 19.9428 5.67148 20.3985 12.0064 23.1943L19.2026 26.3702L20.6964 26.043C30.1135 23.9798 51.1794 19.5513 51.5655 19.5538C52.8154 19.5618 53.4483 21.0462 52.6027 21.9868C52.2139 22.4194 52.0513 22.4615 44.8823 23.9916C40.8546 24.8514 33.487 26.4296 28.51 27.4991C23.5331 28.5685 19.2606 29.4407 19.0157 29.4373C18.76 29.4336 16.0867 28.3308 12.7392 26.8481C7.18023 24.3858 6.87601 24.2692 6.21816 24.3478C3.79947 24.6372 2.87991 25.7128 3.0573 28.0452C3.17911 29.6477 3.41453 30.3416 4.07482 31.0437C4.61691 31.6203 5.27519 31.942 11.9339 34.8825L19.2014 38.0919L20.1211 37.89C27.9183 36.1787 51.1921 31.2574 51.4885 31.2574C52.3212 31.2574 53 31.9517 53 32.8033C53 33.3827 52.3924 34.0733 51.7327 34.2438C51.4423 34.3189 43.9213 35.932 35.0196 37.8285L18.8346 41.2767L12.8982 38.6441L6.96191 36.0115L5.99035 36.1277C4.33552 36.3257 3.47816 36.9357 3.14521 38.1522C2.94828 38.8715 3.0573 40.5941 3.36425 41.6103C3.77261 42.963 3.9332 43.0565 11.9254 46.5955L19.1835 49.8096L25.2113 48.522C47.1977 43.8252 51.2919 42.9642 51.6367 42.9642C52.1971 42.9642 53 43.8009 53 44.3847C53 45.0121 52.6557 45.6069 52.1808 45.7995C51.7376 45.9794 52.1533 45.8889 32.6539 50.0516L18.8432 53L11.324 49.6784C7.18828 47.8516 3.5461 46.2098 3.2301 46.0299C2.3848 45.5489 1.18257 44.2803 0.798195 43.4638C0.298342 42.4021 -0.00185861 40.8606 8.6601e-06 39.3669C0.00288138 37.1485 0.463955 35.9464 1.79072 34.6992L2.60744 33.9314L1.88653 33.2011C0.514801 31.8116 -0.0765482 29.8898 0.0218425 27.1408C0.0699606 25.7942 0.127845 25.5109 0.522557 24.6902C0.964525 23.7709 1.61319 22.969 2.28583 22.5102L2.63429 22.2725L1.90549 21.5065C0.498285 20.0278 -0.076261 18.1754 0.0218425 15.434C0.0699606 14.0863 0.128279 13.8015 0.529167 12.9547C1.36412 11.191 2.76443 10.1815 4.96307 9.75835Z" fill={color}/>
            <path
                d="M62.34 16.232H69.54V41H62.34V16.232ZM71.052 35.204H78.756V41H71.052V35.204ZM91.7886 31.856C91.7886 30.632 91.7766 29.816 91.7526 29.408C91.7286 28.832 91.6566 28.4 91.5366 28.112C91.4166 27.8 91.2246 27.608 90.9606 27.536C90.6726 27.464 90.2766 27.428 89.7726 27.428H89.2686V22.352H89.7726C91.8606 22.352 93.4926 22.52 94.6686 22.856C95.8446 23.168 96.7206 23.696 97.2966 24.44C97.8246 25.112 98.1606 26.012 98.3046 27.14C98.4726 28.244 98.5566 29.816 98.5566 31.856C98.5566 33.752 98.4966 35.228 98.3766 36.284C98.2806 37.316 98.0286 38.168 97.6206 38.84C97.1646 39.584 96.4806 40.148 95.5686 40.532C94.6566 40.892 93.3966 41.12 91.7886 41.216V31.856ZM89.7726 41.288C87.6846 41.288 86.0526 41.132 84.8766 40.82C83.7006 40.508 82.8246 39.98 82.2486 39.236C81.7206 38.564 81.3726 37.676 81.2046 36.572C81.0606 35.468 80.9886 33.896 80.9886 31.856C80.9886 29.984 81.0486 28.52 81.1686 27.464C81.2886 26.408 81.5526 25.532 81.9606 24.836C82.3926 24.068 83.0646 23.504 83.9766 23.144C84.8886 22.76 86.1486 22.52 87.7566 22.424V31.856C87.7566 33.08 87.7686 33.884 87.7926 34.268C87.8166 34.844 87.8886 35.276 88.0086 35.564C88.1286 35.852 88.3326 36.032 88.6206 36.104C88.8606 36.176 89.2446 36.212 89.7726 36.212H90.2766V41.288H89.7726ZM106.99 40.892C106.03 40.892 105.214 40.736 104.542 40.424C103.87 40.088 103.318 39.56 102.886 38.84C102.022 37.448 101.59 35.024 101.59 31.568C101.59 28.088 102.022 25.676 102.886 24.332C103.318 23.66 103.87 23.168 104.542 22.856C105.214 22.544 106.03 22.388 106.99 22.388C107.806 22.388 108.502 22.46 109.078 22.604C109.654 22.748 110.182 23.012 110.662 23.396V27.932H110.266C109.738 27.932 109.354 27.968 109.114 28.04C108.898 28.088 108.73 28.208 108.61 28.4C108.49 28.664 108.418 29.036 108.394 29.516C108.37 29.852 108.358 30.56 108.358 31.64C108.358 32.72 108.37 33.428 108.394 33.764C108.418 34.268 108.49 34.64 108.61 34.88C108.73 35.096 108.922 35.228 109.186 35.276C109.522 35.324 109.882 35.348 110.266 35.348H110.662V39.92C110.182 40.304 109.666 40.568 109.114 40.712C108.562 40.832 107.854 40.892 106.99 40.892ZM109.402 48.416C108.202 48.416 106.762 48.344 105.082 48.2L102.922 47.984V43.34H107.746C108.61 43.34 109.45 43.316 110.266 43.268C110.866 43.22 111.298 43.1 111.562 42.908C111.85 42.74 112.03 42.44 112.102 42.008C112.15 41.432 112.174 40.82 112.174 40.172V22.64H118.834V38.984C118.834 40.856 118.75 42.32 118.582 43.376C118.414 44.456 118.054 45.356 117.502 46.076C116.878 46.868 115.918 47.456 114.622 47.84C113.35 48.224 111.61 48.416 109.402 48.416ZM133.203 31.856C133.203 30.632 133.191 29.816 133.167 29.408C133.143 28.832 133.071 28.4 132.951 28.112C132.831 27.8 132.639 27.608 132.375 27.536C132.087 27.464 131.691 27.428 131.187 27.428H130.683V22.352H131.187C133.275 22.352 134.907 22.52 136.083 22.856C137.259 23.168 138.135 23.696 138.711 24.44C139.239 25.112 139.575 26.012 139.719 27.14C139.887 28.244 139.971 29.816 139.971 31.856C139.971 33.752 139.911 35.228 139.791 36.284C139.695 37.316 139.443 38.168 139.035 38.84C138.579 39.584 137.895 40.148 136.983 40.532C136.071 40.892 134.811 41.12 133.203 41.216V31.856ZM131.187 41.288C129.099 41.288 127.467 41.132 126.291 40.82C125.115 40.508 124.239 39.98 123.663 39.236C123.135 38.564 122.787 37.676 122.619 36.572C122.475 35.468 122.403 33.896 122.403 31.856C122.403 29.984 122.463 28.52 122.583 27.464C122.703 26.408 122.967 25.532 123.375 24.836C123.807 24.068 124.479 23.504 125.391 23.144C126.303 22.76 127.563 22.52 129.171 22.424V31.856C129.171 33.08 129.183 33.884 129.207 34.268C129.231 34.844 129.303 35.276 129.423 35.564C129.543 35.852 129.747 36.032 130.035 36.104C130.275 36.176 130.659 36.212 131.187 36.212H131.691V41.288H131.187Z" fill={color}/>
        </svg>
    )
}

export default Logo;