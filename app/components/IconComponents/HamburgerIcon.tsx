export default function Hamburger({
   fill,
   width,
   height,
}: {
   fill?: string;
   width?: number;
   height?: number;
}) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={width ?? 16}
         height={height ?? 15}
         viewBox="0 0 16 15"
         fill={fill ?? "currentColor"}
      >
         <rect width="16" height="3" fill="white" />
         <rect y="6" width="16" height="3" fill="white" />
         <rect y="12" width="16" height="3" fill="white" />
      </svg>
   );
}
