export const TopFooter = () => {
  return (
    <div>
      <div>Остались вопросы?</div>
      <div>Cвяжитесь с нами, мы вам поможем!</div>
      <span>Заполните форму и мы свяжемся с Вами в ближайшее время</span>
      <div>
        <input type="text" value={"Ваше имя"}/>
        <input type="text" value={"Ваш телефон"}/>
        <button>Отправить</button>
      </div>
      <div>
        <input type="checkbox" />
        <span>Согласен на обработку персональных данных</span>
      </div>
    </div>
  );
};
