import React from "react";
import "./App.scss";
import { Assets } from "./assets";
import { Videos } from "./assets/videos";
import { Icons } from "./assets/icons";

function App() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if(index === 0 || index === ``){
      setTimeout(() => {
        setIndex(1)
      }, 8100)
    }else if(index === 2 || index === 3){
      setTimeout(() => {
        setIndex(3)
      }, 2900)
    }
  }, [index])

  console.log(index);
  


  return (
    <div className="container">
      <div className="video__content">
        {Videos.map((item, i) => (
          <video
            autoPlay
            muted
            loop
            preload="auto"
            style={
              item.id === index ? 
              {
                width: '100%',
                display: 'block'
              } : 
              {
                width: '100%',
                display: 'none'
              }
            }
            key={i}
          >
            <source src={item.video} type="video/mp4" />
          </video>
        ))}
      </div>
      {
        index === 0 || index === 1?
        <div className="content">
          <img src={Assets.logo} alt="logo" className="logo" />
          <h1>Добро пожаловать в Энесай!</h1>
          <p>Ознакомьтесь с нашим комплексом подробнее...</p>
          <button onClick={() => setIndex(2)}>
            Продолжить <img src={Assets.arrow} alt="arrow" />
          </button>
        </div> :
        <div className="more__content">
          <img src={Assets.logo} alt="logo" className="logo"/>
          <div className="cards">
            <div className="card__1">
              <h3>
                Архитектурный акцент города - жилой комплекс премиум класса Enesai, место где живут широко!
              </h3>
              <div className="categories">
                <span>
                  Экологичный район 
                  <img 
                    src={Icons.ecology}
                  />
                </span>
                <span>
                  26-24 этажа
                  <img 
                    src={Icons.floors}
                  />
                </span>
                <span>
                  Умные планировки
                  <img 
                    src={Icons.plan}
                  />
                </span>
                <span>
                  от 47кв.м²
                  <img 
                    src={Icons.scale}
                  />
                </span>
                <span>
                  Охрана 24/7
                  <img 
                    src={Icons.security}
                  />
                </span>
              </div>
              <p>
                Футуристический проект с панорамными окнами, расположенный в верхней части города, рядом с парком Асанбай. Комплекс оснащён двухуровневой парковкой и просторным двором по концепции "двор без машин", что обеспечивает безопасность и удобство для всех жителей. Большая детская площадка создаёт идеальные условия для семейного отдыха, а охраняемая территория гарантирует приватность и спокойствие.
              </p>
            </div>
            <div className="card">
              <h1>
                Блок А
              </h1>
              <span>
                Посмотреть блок А
                <img 
                  src={Assets.arrow}
                />
              </span>
              <p>
                Блок “А” имеет этажность в 24 этажа
              </p>
            </div> 
            <div className="card">
              <h1>
                Блок Б
              </h1>
              <span>
                Посмотреть блок Б
                <img 
                  src={Assets.arrow}
                />
              </span>
              <p>
                Блок “Б” имеет этажность в 26 этажа
              </p>
            </div> 
          </div>
        </div>
      }
    </div>
  );
}

export default App;
