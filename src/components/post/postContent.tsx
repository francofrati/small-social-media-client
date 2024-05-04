interface PostContentProps {
  content: string;
  imageUrl: string | null;
}

function PostContent({ content, imageUrl }: PostContentProps) {
  return (
    <>
      <div className=" pb-4">{content}</div>
      {imageUrl ? (
        <img className="rounded-xl mb-4 w-full" src={imageUrl} />
      ) : (
        <></>
      )}
    </>
  );
}

export default PostContent;
