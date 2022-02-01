const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <div>
      <section
        className='square'
        style={{
          backgroundColor: colorValue,
          color: isDarkText ? '#000' : '#FFF',
        }}
      >
        <p>{colorValue ? colorValue : 'Empty Value'}</p>
        <p>{hexValue ? hexValue : null}</p>
      </section>
    </div>
  );
};
Square.defaultProps = {
  colorValue: 'Empty Value',
};
export default Square;
