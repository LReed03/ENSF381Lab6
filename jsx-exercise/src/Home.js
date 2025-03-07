function Home(props) {

    return (
        <div>
            <h1>{props.title}</h1>
            <p>Welcome to the Home Page!</p>
            <p>{props.message}</p>
        </div>
    );
  }

export default Home;