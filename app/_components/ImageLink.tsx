import Link from "next/link";
import { ComponentProps } from "react";

type ImageLinkProps = ComponentProps<typeof Link>;

const ImageLink = ({ children, ...props }: ImageLinkProps) => (
  <Link className="w-2/3 transition hover:opacity-60 sm:w-auto" {...props}>
    {children}
  </Link>
);

export default ImageLink;
