import React from "react";
import "./App.scss";
import { Assets } from "./assets";
import { Videos } from "./assets/videos";
import { Icons } from "./assets/icons";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Components } from "./components";
import { Apartments } from "./utils";
import { Audios } from "./assets/audios";
import { GoMute, GoUnmute } from "react-icons/go";


function App() {
  const [index, setIndex] = React.useState(0);
  const [block, setBlock] = React.useState(1)
  const [rooms, setRooms] = React.useState(1)
  const [floor, setFloor] = React.useState(1)
  const [scale, setScale] = React.useState({min: 64, max: 250})
  const [price, setPrice] = React.useState({min: 537853, max: 4965460})
  const [buttonActive, setButtonActive] = React.useState(true)
  const [stateAudio, setStateAudio] = React.useState(false)
  const [stateAudioPlay, setStateAudioPlay] = React.useState(false)
  const [volume, setVolume] = React.useState(50)

  const audio = React.useRef(new Audio(Audios.back));
  const audioOne = React.useRef(new Audio(Audios.first));
  const audioDvor = React.useRef(new Audio(Audios.dvor));
  const audioPlowad = React.useRef(new Audio(Audios.plowad));

  React.useEffect(() => {
    let timeout;

    if (index === 0 || index === 1) {
      timeout = setTimeout(() => {
        setIndex(1);
      }, 7160);
    } else if (index === 2 || index === 3) {
      timeout = setTimeout(() => {
        setIndex(3);
      }, 1000);
    } else if (index === 4 || index === 5) {
      timeout = setTimeout(() => {
        setIndex(5);
      }, 1000);
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
      }, 3000);
    }else if (index === 14 || index === 15) {
      timeout = setTimeout(() => {
        setIndex(15);
      }, 3090);
    }else if (index === 16 || index === 17) {
      timeout = setTimeout(() => {
        setIndex(17);
      }, 3090);
    }else if (index === 18 || index === 19) {
      timeout = setTimeout(() => {
        setIndex(19);
      }, 1000);
    }else if (index === 20 || index === 21) {
      timeout = setTimeout(() => {
        setIndex(21);
      }, 300);
    }else if (index === 22 || index === 23) {
      timeout = setTimeout(() => {
        setIndex(23);
      }, 300);
    }else if (index === 24 || index === 25) {
      timeout = setTimeout(() => {
        setIndex(25);
      }, 1900);
    }else if (index === 26 || index === 27) {
      timeout = setTimeout(() => {
        setIndex(27);
      }, 2000);
    }

    return () => {
      clearTimeout(timeout); 
    };
  }, [index]);

  React.useEffect(() => {
    audio.current.volume = volume/100;
  }, [volume])

  const audioPlayer = () => {
    if (stateAudioPlay) {
      audio.current.pause();
      setStateAudioPlay(false);
    } else {
      audio.current.play().catch((error) => console.log("Ошибка воспроизведения:", error));
      setStateAudioPlay(true);
    }
  };
  
  React.useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true,
    });

    AOS.refresh()
  }, [index]);
  

  React.useEffect(() => {
    if(stateAudioPlay){
      if(index === 1){
        audioOne.current.play()
      }else if(index === 15){
        audioDvor.current.play()
      }else if(index === 21){
        audioPlowad.current.play()
      }else{
        audioOne.current.pause()
        audioDvor.current.pause()
        audioPlowad.current.pause()
      }
    }
  }, [index])
  console.log(index);
  

  const FilteredApartments = Apartments.filter(item => item.block === block && item.rooms === rooms && item.floor === floor && item.scale >= scale.min && item.scale <= scale.max && item.price >= price.min && item.price <= price.max)

  const floorsData = []

  for(let i = 1; i <= 26; i++){
    floorsData.push(i)
  }

  return (
    <div className="container">
      <div className="sound__controls">
        <button onClick={audioPlayer}>
          {stateAudioPlay ? <GoUnmute /> : <GoMute />}
        </button>
        <input 
          type="range"
          value={volume}
          onChange={e => setVolume(e.target.value)}
          max={100}
        />
      </div>
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
          <button onClick={() => setIndex(2)} disabled={!buttonActive} className={buttonActive ? "active" : ''}>
            Продолжить {!buttonActive ?  <img src={Assets.arrow} alt="arrow" /> :  <img src={Assets.arrowBlack} alt="arrow" />}
          </button>
        </div> 
        :
        index === 3 || index === 17 || index === 19?
          <div className="more__content">
            <img 
              src={Assets.logo}
              alt="logo"
              className="logo"
            />
            <h1>
              ЖК Энесай
            </h1>
            <p>
              Архитектурный акцент города - жилой <br/>
              комплекс премиум класса Enesai, место где <br/>
              живут широко!
            </p>
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
            <div className="btns">
              <span onClick={() => setIndex(4)}>
                Посмотреть квартиры
                <img 
                  src={Assets.arrowBlack}
                />
              </span>
              <span onClick={() => setIndex(14)}>
                Посмотреть двор
                <img 
                  src={Assets.arrowBlack}
                />
              </span>
            </div>
          </div>
        :
        index >= 4 && index <= 5 || index === 13 ?
        <div className="filter__price">
          <button onClick={() => setIndex(18)} className="back__filter">
            <img 
              src={Assets.arrowBlack}
              alt="arrow"
            />
            Назад
          </button>
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
                {price.min} - {price.max} сом
              </h3>
              <Components.DualRangeSlider min={537853} max={4965460} setValue={setPrice}/>
            </div>
          </div>

          <div className="floors">
            <h3>Этаж</h3>
            <div className="btns">
              {
                floorsData.map(item => (
                  <button
                    onClick={() => setFloor(item)}
                    className={floor === item ? 'active' : ''}
                    key={item}
                  >
                    {item}
                  </button>
                ))
              }
            </div>
          </div>

          <div className="apart">
            <div className="apartments">
              {
                FilteredApartments.map((item, i) => (
                  <div className="apartment" onClick={() => setIndex(6)}>
                    <div className="scale">
                      <p>
                        Площадь
                      </p>
                      <h4>{item.scale} М²</h4>
                    </div>
                    <div className="info">
                      <p>
                        Этаж: {item.floor}
                      </p>
                      <p>
                        Блок: {item.block}
                      </p>
                      <p>
                        Комнат: {item.rooms}
                      </p>
                    </div>
                    <div>
                      <h3>{item.price} сом</h3>
                    </div>
                  </div>
                ))
              }
            </div>
            {
              FilteredApartments.length !== 0 ?
              <div className="plan">
                <img 
                  src={Assets.plan}
                  alt="plan"
                />
              </div> :
              null
            }
          </div>
        </div>
        :
        index === 7 ?
        <div className="apartment__more">
          <button onClick={() => setIndex(8)}>
            Открыть
            <img 
              src={Assets.arrowBlack}
              alt="arrow"
            />
          </button>
        </div> :
        index === 9  ?
        <div className="back__apartment">
          <button onClick={() => setIndex(10)}>
            <img 
              src={Assets.arrowBlack}
              alt="arrow"
            />
            Назад
          </button>

          <h1>
            Квартира 345
          </h1>

          <div className="info">
            <div>
              <h4>
                Этаж
              </h4>
              <p>
                5
              </p>
            </div>
            <div>
              <h4>
                Комнат
              </h4>
              <p>
                4
              </p>
            </div>
            <div>
              <h4>
                Площадь
              </h4>
              <p>
                11 М²
              </p>
            </div>
            <div>
              <h4>
                Стоимость
              </h4>
              <p>
                1 000 000 сом
              </p>
            </div>
          </div>

          <div className="plan">
            <img 
              src={Assets.plan}
              alt="plan"
            />
          </div>

        </div> :
        index === 11 ?
        <div className="back">
          <button onClick={() => setIndex(12)}>
            <img 
              src={Assets.arrowBlack}
              alt="arrow"
            />
            Назад
          </button>
        </div> :
        index === 15 || index === 23 || index === 27?
        <div className="garten">
          <button className="karusel" onClick={() => setIndex(20)}>
            <img 
              src={Icons.location}
              alt="karusel"
            />
          </button>
          <button className="gym" onClick={() => setIndex(24)}>
            <img 
              src={Icons.location}
              alt="gym"
            />
          </button>
          <div className="back__garten">
            <button onClick={() => setIndex(16)}>
              <img 
                src={Assets.arrowBlack}
                alt="arrow"
              />
              Назад
            </button>
          </div>
        </div>
        :
        index === 21 ?
        <div className="back">
          <button onClick={() => setIndex(22)}>
            <img 
              src={Assets.arrowBlack}
              alt="arrow"
            />
            Назад
          </button>
        </div>
        :
        index === 25 ?
        <div className="back">
          <button onClick={() => setIndex(26)}>
            <img 
              src={Assets.arrowBlack}
              alt="arrow"
            />
            Назад
          </button>
        </div>
        :
          null
      }
    </div>
  );
}

export default App;



{/* <div className="more__content">
          <img src={Assets.logo} alt="logo" className="logo"/>
          <div className="cards">
            <div className="card__1">
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
              <h3>
                Архитектурный акцент города - жилой комплекс премиум класса Enesai, место где живут широко!
              </h3>
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
        </div> */}