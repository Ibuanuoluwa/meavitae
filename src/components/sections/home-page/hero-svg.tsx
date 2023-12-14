interface heroSvgImages {
  centerImg: string;
  leftImg1: string;
  leftImg2: string;
  rightImg1: string;
  rightImg2: string;
}

function HeroSvg({ centerImg, leftImg1, leftImg2, rightImg1, rightImg2 }: heroSvgImages) {
  return (
    <div>
      <svg
        width="591"
        height="615"
        viewBox="0 0 591 615"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M410 89V194.5"
          stroke="#8282D8"
          stroke-width="3"
          stroke-dasharray="8 8"
        />
        <path
          d="M72 351H159"
          stroke="#8282D8"
          stroke-width="3"
          stroke-dasharray="8 8"
        />
        <path
          d="M128 536H201.5V441.5"
          stroke="#8282D8"
          stroke-width="3"
          stroke-dasharray="8 8"
        />
        <path
          d="M103 134H176.5V228.5"
          stroke="#8282D8"
          stroke-width="3"
          stroke-dasharray="8 8"
        />
        <path
          d="M266 564.5V476"
          stroke="#8282D8"
          stroke-width="3"
          stroke-dasharray="8 8"
        />
        <path
          d="M478.5 512H430.5V415.5"
          stroke="#8282D8"
          stroke-width="3"
          stroke-dasharray="8 8"
        />
        <path
          d="M535.5 268H445"
          stroke="#8282D8"
          stroke-width="3"
          stroke-dasharray="8 8"
        />
        <defs>
          <pattern
            id="imgPattern1"
            patternUnits="userSpaceOnUse"
            width="800"
            height="600"
          >
            <image href={centerImg} x="0" y="0" width="800" height="600" />
          </pattern>
          <pattern
            id="imgPattern2"
            patternUnits="userSpaceOnUse"
            width="300"
            height="300"
          >
            <image href={leftImg1} x="0" y="0" width="300" height="300" />
          </pattern>
          <pattern
            id="imgPattern3"
            patternUnits="userSpaceOnUse"
            width="300"
            height="300"
          >
            <image href={leftImg2} x="0" y="0" width="300" height="300" />
          </pattern>
          <pattern
            id="imgPattern4"
            patternUnits="userSpaceOnUse"
            width="300"
            height="300"
          >
            <image href={rightImg1} x="0" y="0" width="300" height="300" />
          </pattern>
          <pattern
            id="imgPattern5"
            patternUnits="userSpaceOnUse"
            width="300"
            height="300"
          >
            <image href={rightImg2} x="0" y="0" width="300" height="300" />
          </pattern>
        </defs>
        <path
          d="M287.5 106.877C298.329 100.625 311.671 100.625 322.5 106.877L477.356 196.283C488.185 202.535 494.856 214.09 494.856 226.594V405.406C494.856 417.91 488.185 429.465 477.356 435.717L322.5 525.123C311.671 531.375 298.329 531.375 287.5 525.123L132.644 435.717C121.815 429.465 115.144 417.91 115.144 405.406V226.594C115.144 214.09 121.815 202.535 132.644 196.283L287.5 106.877Z"
          fill="url(#imgPattern1)"
          stroke="#8686C3"
          strokeWidth="10"
        />

        <path
          d="M59.5 74.3716C64.7598 71.3348 71.2402 71.3348 76.5 74.3716L115.39 96.8246C120.65 99.8613 123.89 105.473 123.89 111.547V156.453C123.89 162.527 120.65 168.139 115.39 171.175L76.5 193.628C71.2402 196.665 64.7598 196.665 59.5 193.628L20.6103 171.175C15.3505 168.139 12.1103 162.527 12.1103 156.453V111.547C12.1103 105.473 15.3505 99.8613 20.6103 96.8246L59.5 74.3716Z"
          fill="url(#imgPattern2)"
          stroke="white"
          stroke-width="6"
        />
        <g filter="url(#filter0_bi_439_4646)">
          <path
            d="M53 317.464C56.7128 315.321 61.2872 315.321 65 317.464L85.0429 329.036C88.7558 331.179 91.0429 335.141 91.0429 339.428V362.572C91.0429 366.859 88.7558 370.821 85.0429 372.964L65 384.536C61.2872 386.679 56.7128 386.679 53 384.536L32.9571 372.964C29.2442 370.821 26.9571 366.859 26.9571 362.572V339.428C26.9571 335.141 29.2442 331.179 32.9571 329.036L53 317.464Z"
            fill="white"
          />
          <path
            d="M54 319.196C57.094 317.41 60.906 317.41 64 319.196L84.0429 330.768C87.1369 332.554 89.0429 335.856 89.0429 339.428V362.572C89.0429 366.144 87.1369 369.446 84.0429 371.232L64 382.804C60.906 384.59 57.094 384.59 54 382.804L33.9571 371.232C30.8631 369.446 28.9571 366.144 28.9571 362.572V339.428C28.9571 335.856 30.8631 332.554 33.9571 330.768L54 319.196Z"
            stroke="#8282D8"
            stroke-width="4"
          />
        </g>
        <path
          d="M54.5 352.5H63.5M54.5 358.5H59M47 339V363C47 363.796 47.3161 364.559 47.8787 365.121C48.4413 365.684 49.2044 366 50 366H68C68.7956 366 69.5587 365.684 70.1213 365.121C70.6839 364.559 71 363.796 71 363V345.513C71 345.113 70.92 344.718 70.765 344.349C70.6099 343.981 70.3828 343.647 70.097 343.368L63.437 336.855C62.8765 336.307 62.1239 336 61.34 336H50C49.2044 336 48.4413 336.316 47.8787 336.879C47.3161 337.441 47 338.204 47 339Z"
          stroke="#8686C3"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M62 336V342C62 342.796 62.3161 343.559 62.8787 344.121C63.4413 344.684 64.2044 345 65 345H71"
          stroke="#8686C3"
          stroke-width="3"
          stroke-linejoin="round"
        />
        <path
          d="M100.5 476.372C105.76 473.335 112.24 473.335 117.5 476.372L156.39 498.825C161.65 501.861 164.89 507.473 164.89 513.547V558.453C164.89 564.527 161.65 570.139 156.39 573.175L117.5 595.628C112.24 598.665 105.76 598.665 100.5 595.628L61.6103 573.175C56.3505 570.139 53.1103 564.527 53.1103 558.453V513.547C53.1103 507.473 56.3505 501.861 61.6103 498.825L100.5 476.372Z"
          fill="url(#imgPattern3)"
          stroke="white"
          stroke-width="6"
        />
        <g filter="url(#filter1_bi_439_4646)">
          <path
            d="M260 544.464C263.713 542.321 268.287 542.321 272 544.464L292.043 556.036C295.756 558.179 298.043 562.141 298.043 566.428V589.572C298.043 593.859 295.756 597.821 292.043 599.964L272 611.536C268.287 613.679 263.713 613.679 260 611.536L239.957 599.964C236.244 597.821 233.957 593.859 233.957 589.572V566.428C233.957 562.141 236.244 558.179 239.957 556.036L260 544.464Z"
            fill="white"
          />
          <path
            d="M261 546.196C264.094 544.41 267.906 544.41 271 546.196L291.043 557.768C294.137 559.554 296.043 562.856 296.043 566.428V589.572C296.043 593.144 294.137 596.446 291.043 598.232L271 609.804C267.906 611.59 264.094 611.59 261 609.804L240.957 598.232C237.863 596.446 235.957 593.144 235.957 589.572V566.428C235.957 562.856 237.863 559.554 240.957 557.768L261 546.196Z"
            stroke="#8282D8"
            stroke-width="4"
          />
        </g>
        <path
          d="M277.25 570.688H273.312V567.875C273.312 565.936 272.542 564.076 271.171 562.704C269.799 561.333 267.939 560.562 266 560.562C264.061 560.562 262.201 561.333 260.829 562.704C259.458 564.076 258.688 565.936 258.688 567.875V570.688H254.75C254.004 570.688 253.289 570.984 252.761 571.511C252.234 572.039 251.938 572.754 251.938 573.5V589.25C251.938 589.996 252.234 590.711 252.761 591.239C253.289 591.766 254.004 592.062 254.75 592.062H277.25C277.996 592.062 278.711 591.766 279.239 591.239C279.766 590.711 280.062 589.996 280.062 589.25V573.5C280.062 572.754 279.766 572.039 279.239 571.511C278.711 570.984 277.996 570.688 277.25 570.688ZM262.062 567.875C262.062 566.831 262.477 565.829 263.216 565.091C263.954 564.352 264.956 563.938 266 563.938C267.044 563.938 268.046 564.352 268.784 565.091C269.523 565.829 269.938 566.831 269.938 567.875V570.688H262.062V567.875ZM276.688 588.688H255.312V574.062H276.688V588.688ZM268.25 581.375C268.25 581.82 268.118 582.255 267.871 582.625C267.624 582.995 267.272 583.283 266.861 583.454C266.45 583.624 265.998 583.669 265.561 583.582C265.125 583.495 264.724 583.281 264.409 582.966C264.094 582.651 263.88 582.25 263.793 581.814C263.706 581.377 263.751 580.925 263.921 580.514C264.092 580.103 264.38 579.751 264.75 579.504C265.12 579.257 265.555 579.125 266 579.125C266.597 579.125 267.169 579.362 267.591 579.784C268.013 580.206 268.25 580.778 268.25 581.375Z"
          fill="#8686C3"
        />
        <path
          d="M514.5 452.372C519.76 449.335 526.24 449.335 531.5 452.372L570.39 474.825C575.65 477.861 578.89 483.473 578.89 489.547V534.453C578.89 540.527 575.65 546.139 570.39 549.175L531.5 571.628C526.24 574.665 519.76 574.665 514.5 571.628L475.61 549.175C470.35 546.139 467.11 540.527 467.11 534.453V489.547C467.11 483.473 470.35 477.861 475.61 474.825L514.5 452.372Z"
          fill="url(#imgPattern4)"
          stroke="white"
          stroke-width="6"
        />
        <path
          d="M403.5 7.21688C407.522 4.89465 412.478 4.89465 416.5 7.21688L452.462 27.9793C456.484 30.3015 458.962 34.5932 458.962 39.2376V80.7624C458.962 85.4069 456.484 89.6985 452.462 92.0207L416.5 112.783C412.478 115.105 407.522 115.105 403.5 112.783L367.538 92.0207C363.516 89.6985 361.038 85.4068 361.038 80.7624V39.2376C361.038 34.5932 363.516 30.3015 367.538 27.9793L403.5 7.21688Z"
          fill="url(#imgPattern5)"
          stroke="white"
          stroke-width="6"
        />
        <g filter="url(#filter2_bi_439_4646)">
          <path
            d="M548 234.464C551.713 232.321 556.287 232.321 560 234.464L580.043 246.036C583.756 248.179 586.043 252.141 586.043 256.428V279.572C586.043 283.859 583.756 287.821 580.043 289.964L560 301.536C556.287 303.679 551.713 303.679 548 301.536L527.957 289.964C524.244 287.821 521.957 283.859 521.957 279.572V256.428C521.957 252.141 524.244 248.179 527.957 246.036L548 234.464Z"
            fill="white"
          />
          <path
            d="M549 236.196C552.094 234.41 555.906 234.41 559 236.196L579.043 247.768C582.137 249.554 584.043 252.856 584.043 256.428V279.572C584.043 283.144 582.137 286.446 579.043 288.232L559 299.804C555.906 301.59 552.094 301.59 549 299.804L528.957 288.232C525.863 286.446 523.957 283.144 523.957 279.572V256.428C523.957 252.856 525.863 249.554 528.957 247.768L549 236.196Z"
            stroke="#8282D8"
            stroke-width="4"
          />
        </g>
        <path
          d="M551 284.5C550.175 284.5 549.469 284.206 548.881 283.618C548.293 283.03 547.999 282.324 548 281.5V277C547.175 277 546.469 276.706 545.881 276.118C545.293 275.53 544.999 274.824 545 274V254.5C545 253.675 545.294 252.969 545.882 252.381C546.47 251.793 547.176 251.499 548 251.5H560C560.825 251.5 561.532 251.794 562.12 252.382C562.708 252.97 563.001 253.676 563 254.5V274C563 274.825 562.706 275.532 562.118 276.12C561.53 276.708 560.824 277.001 560 277V281.5C560 282.325 559.706 283.032 559.118 283.62C558.53 284.208 557.824 284.501 557 284.5H551ZM554 268.75C555.25 268.75 556.313 268.313 557.188 267.438C558.063 266.563 558.5 265.5 558.5 264.25C558.5 263 558.063 261.938 557.188 261.063C556.313 260.188 555.25 259.75 554 259.75C552.75 259.75 551.688 260.188 550.813 261.063C549.938 261.938 549.5 263 549.5 264.25C549.5 265.5 549.938 266.563 550.813 267.438C551.688 268.313 552.75 268.75 554 268.75ZM551 281.5H557V277H551V281.5ZM548 274H560V254.5H548V274ZM554 265.75C553.575 265.75 553.219 265.606 552.931 265.318C552.643 265.03 552.499 264.674 552.5 264.25C552.5 263.825 552.644 263.469 552.932 263.181C553.22 262.893 553.576 262.749 554 262.75C554.425 262.75 554.782 262.894 555.07 263.182C555.358 263.47 555.501 263.826 555.5 264.25C555.5 264.675 555.356 265.032 555.068 265.32C554.78 265.608 554.424 265.751 554 265.75Z"
          fill="#8686C3"
        />
      </svg>
    </div>
  );
}

export default HeroSvg;
