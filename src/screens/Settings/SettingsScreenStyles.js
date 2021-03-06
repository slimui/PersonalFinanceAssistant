import { StyleSheet } from 'react-native';
import { margins, fontSizes, colors } from 'src/styles';

export default StyleSheet.create({
  userName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: fontSizes.FONT_SIZE_XL,
    marginBottom: margins.MARGIN_L
  },
  button: {
    marginBottom: margins.MARGIN_M
  },
  gravatar: {
    width: 200,
    height: 200,
    marginTop: margins.MARGIN_L,
    marginBottom: margins.MARGIN_M
  },
  profileCard: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileCardContainer: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: margins.MARGIN_L
  },
  changePassword: {
    textAlign: 'center',
    color: colors.COLOR_SECONDARY
  },
  logout: {
    padding: 4,
    textAlign: 'center',
    color: colors.COLOR_RED
  }
});
