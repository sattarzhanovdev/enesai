import React from "react";
import "./App.scss";
import { Assets } from "./assets";
import { Videos } from "./assets/videos";
import { Icons } from "./assets/icons";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Components } from "./components";

function App() {
  const [index, setIndex] = React.useState(0);
  const [block, setBlock] = React.useState(1)
  const [rooms, setRooms] = React.useState(1)
  const [scale, setScale] = React.useState({min: 64, max: 250})
  const [price, setPrice] = React.useState({min: 5, max: 300})

  React.useEffect(() => {
    let timeout;
    
    if (index === 0 || index === 1) {
      timeout = setTimeout(() => {
        setIndex(1);
      }, 8100);
    } else if (index === 2 || index === 3) {
      timeout = setTimeout(() => {
        setIndex(3);
      }, 2900);
    } else if (index === 4 || index === 5) {
      timeout = setTimeout(() => {
        setIndex(5);
      }, 900);
    } else if (index === 6 || index === 7) {
      timeout = setTimeout(() => {
        setIndex(7);
      }, 3000);
    } else if (index === 8 || index === 9) {
      timeout = setTimeout(() => {
        setIndex(9);
      }, 800);
    }else if (index === 10 || index === 11) {
      timeout = setTimeout(() => {
        setIndex(11);
      }, 800);
    }else if (index === 12 || index === 13) {
      timeout = setTimeout(() => {
        setIndex(13);
      }, 2900);
    }else if (index === 14 || index === 15) {
      timeout = setTimeout(() => {
        setIndex(15);
      }, 3090);
    }else if (index === 16 || index === 17) {
      timeout = setTimeout(() => {
        setIndex(17);
      }, 3090);
    }

    return () => {
      clearTimeout(timeout); 
    };
  }, [index]);

  React.useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true,
    });

    AOS.refresh()
  }, [index]);
  


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
        index === 1?
        <div
          className="content"
          data-aos="fade-zoom-in"
        >
          <img src={Assets.logo} alt="logo" className="logo" />
          <h1>Добро пожаловать в Энесай!</h1>
          <p>Ознакомьтесь с нашим комплексом подробнее...</p>
          <button onClick={() => setIndex(2)}>
            Продолжить <img src={Assets.arrow} alt="arrow" />
          </button>
        </div> 
        :
        index === 3 || index === 1 || index === 0 ?
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
                Квартиры
              </h1>
              <span onClick={() => setIndex(4)}>
                Посмотреть
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
                Ген. план
              </h1>
              <span onClick={() => setIndex(14)}>
                Посмотреть
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
        :
        index >= 4 && index <= 5 ?
        <div className="filter__price">
          <h1>Выбор квартиры</h1>
          <div className="choices">
            <div className="choose">
              <h3>Блок</h3>
              <div className="btns">
                <button 
                  className={block === 1 ? 'active' : ''}
                  onClick={() => setBlock(1)}
                >
                  1
                </button>
                <button 
                  className={block === 2 ? 'active' : ''}
                  onClick={() => setBlock(2)}
                >
                  2
                </button>
              </div>
            </div>
            <div className="choose">
              <h3>Количество комнат</h3>
              <div className="btns">
                <button 
                  className={rooms === 1 ? 'active' : ''}
                  onClick={() => setRooms(1)}
                >
                  1
                </button>
                <button 
                  className={rooms === 2 ? 'active' : ''}
                  onClick={() => setRooms(2)}
                >
                  2
                </button>
                <button 
                  className={rooms === 3 ? 'active' : ''}
                  onClick={() => setRooms(3)}
                >
                  3
                </button>
                <button 
                  className={rooms === 4 ? 'active' : ''}
                  onClick={() => setRooms(4)}
                >
                  4
                </button>
                <button 
                  className={rooms === 5 ? 'active' : ''}
                  onClick={() => setRooms(5)}
                >
                  5
                </button>
              </div>
            </div>
          </div>

          <div className="ranges">
            <div className="range">
              <h3>
                <span>Area:</span> {scale.min} - {scale.max} М²
              </h3>
              <Components.DualRangeSlider min={64} max={250} setValue={setScale}/>
            </div>
            <div className="range">
              <h3>
                {price.min} - {price.max} $
              </h3>
              <Components.DualRangeSlider min={5} max={300} setValue={setPrice}/>
            </div>
          </div>

          <div className="apartments">
            <div className="apartment" onClick={() => setIndex(6)}>
              hello
            </div>
          </div>
        </div>
        :
        index === 7 ?
        <div className="apartment__more">
          <button onClick={() => setIndex(8)}>Открыть</button>
        </div> :
        index === 9 ?
        <div className="back">
          <button onClick={() => setIndex(10)}>Назад</button>
        </div> :
        index === 11 ?
        <div className="back">
          <button onClick={() => setIndex(12)}>Назад</button>
        </div> :
        index === 15 ?
        <div className="back">
          <button onClick={() => setIndex(16)}>Назад</button>
        </div>
        :
        null
      }
    </div>
  );
}

export default App;
