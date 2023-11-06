import * as React from "react";
import { SVGProps } from "react";
const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        stroke="#000"
        strokeWidth={0.2}
        d="M12.905 8.847a3 3 0 0 1 3-2.946l-3 2.946Zm0 0-.028 1.574m.028-1.574-.028 1.574M4.758 7.81l.132.11c1.877 1.563 3.828 2.5 5.86 2.776l1.56.212L4.758 7.81Zm0 0-.03.169m.03-.17-.03.17m0 0c-.302 1.67-.16 3.093.42 4.324.58 1.23 1.59 2.258 3.008 3.15M4.728 7.978l3.428 7.474m0 0 1.747 1.098.051-.082m-1.798-1.016 1.798 1.016m0 0-.051.082a.5.5 0 0 1 .028.828m.023-.91-.023.91m0 0L8.339 18.54l-.224.163m1.816-1.326-1.816 1.326m0 0 .277.017m-.277-.017.277.017m0 0c.953.06 1.86.017 2.617-.133m-2.617.133 2.618-.133m0 0c2.379-.475 4.364-1.609 5.755-3.367m-5.755 3.367 5.755-3.367m-3.888-4.8a.499.499 0 0 1-.567.486l.567-.486Zm3.888 4.8c1.39-1.758 2.18-4.133 2.18-7.079m-2.18 7.08 2.18-7.08m0 0c0-.145-.074-.357-.201-.585m.201.585-.201-.585m0 0a3.244 3.244 0 0 0-.577-.737m.577.737-.577-.737m0 0a3.222 3.222 0 0 0-2.262-.919l2.262.92Zm2.33-1.282c.385-.054.831-.195 1.419-.527-.306 1.484-.484 2.157-1.152 3.072l-.019.027v.032c0 3.8-1.167 6.615-2.92 8.598-1.752 1.984-4.097 3.141-6.463 3.613-1.617.323-3.608.22-5.366-.142a12.953 12.953 0 0 1-2.376-.714c-.583-.245-1.06-.52-1.39-.807a16.054 16.054 0 0 0 2.014-.33c1-.233 2.128-.61 2.96-1.219l.115-.085-.12-.08a23.073 23.073 0 0 0-.136-.088c-.758-.494-2.317-1.51-3.331-3.371-1.065-1.953-1.54-4.854.182-9.091 1.665 1.917 3.359 3.234 5.081 3.94.582.24.948.358 1.237.425.219.052.394.074.58.097l.18.023.295.04-.181-.18a4.8 4.8 0 0 1 8.213-3.244l.03.03h.042c.102-.001.206.002.313.006.244.008.503.017.794-.025Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default TwitterIcon;
