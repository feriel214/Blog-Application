import "./post.css";
import naruto from "../../assets/naruto.jpg";

function Post() {
  return (
    <div className="post">
      <img className="postImg" src={naruto} alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Muisc</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem Ipsum</span>
        <hr />
        <span className="postDate"> 1 hour ago </span>
      </div>
      <p className="postDesc">
        Le Lorem Ipsum est simplement du faux texte employé dans la composition
        et la mise en page avant impression. Le Lorem Ipsum est le faux texte
        standard de l'imprimerie depuis les années 1500, quand un imprimeur
        anonyme assembla ensemble des morceaux de texte pour réaliser un livre
        spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,
        mais s'est aussi adapté à la bureautique informatique, sans que son
        contenu n'en soit modifié. Il a été popularisé dans les années 1960
        grâce à la vente de feuilles Letraset contenant des passages du Lorem
        Ipsum, et, plus récemment, par son inclusion dans des applications de
        mise en page de texte, comme Aldus PageMaker.{" "}
      </p>
    </div>
  );
}

export default Post;
