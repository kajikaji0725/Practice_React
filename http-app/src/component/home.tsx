import { FC, useState, useEffect } from 'react';
import axis from 'axios';
import { SampleType } from './interface';

const Sample: FC = () => {
  const [info, setInfo] = useState<SampleType[]>([]);
  const datas: SampleType[] = [];
  console.log(axis.defaults.baseURL);
  const axios = axis.create({baseURL: "localhost:8081"})
  delete axios.defaults.headers.common["X-Requested-With"];

  console.log(axios)
  useEffect(() => {
    const getSampleData = () => {
      axios
        .get("/todo",{
          // withCredentials: true
        })  // GETメソッドを呼び出す
        .then((res) => {  // レスポンスを受け取ったらthenを実行する
          // GETで取得したデータをforEachでループしてStateにセットする
          // res.data.forEach((resData:SampleType) => {
          //   const data: SampleType = {
          //     message: resData["message"],
          //   };
          //   datas.push(data);
          // });
          console.log(res.data)
          // for(let i=0; i<res.data.length;i++ ){
          //   const data:SampleType= {
          //     message: res[i].data["message"];
          //   }
          // }
          setInfo(datas);
        })
        .catch((error) => {  // エラーコードが返ってきた場合
          console.log(error);  // エラーコードを表示
        });
      };

    getSampleData();  // 関数を実行する
  }, []);

  return (
    <>
      // ここにTSX、もしくはJSXを記述する
    </>
  )
};


export default Sample;