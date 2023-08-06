import { sum } from './math';

// jest에서 사용되는 method, 특정 기능을 점검
describe('math.js', () => {
  test('10 + 20 = 30', () => {
    const result = sum(10, 20);
    //result === 30;
    // 기대되는 값에 실제값을 예상
    // result의 실제값이 15가 아닌가?
    expect(result).not.toBe(15);
    // result의 실제값이 30이 맞는가?
    // expect(result).toBe(15);
  });
});

// 실행 : npm t

/*
  javascript의 test용 lib

  email 인풋박스에 email을 입력했을 때 이메일이 맞는지 확인하는 로직,
  email, pwd가 맞는 경우에 로그인 처리 후 다음 페이지로 이동 
  -----------------------------------------------------
  등을 브라우저에서 진행하지 않고 테스트 코드로 확인하는 시간을 줄일 수 있음.

  install : npm install --save-dev jest
  CLI로 project 생성 시 test를 체크하면 install 필요 없음 ** 
*/
