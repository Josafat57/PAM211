import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default function ScrollScreen() {

    return (
      <View style={styles.container}>
        <ScrollView styles={styles.ScrollArea} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={true}>
        <Text style={styles.subtitleWhite}>Exhausted - Lxzt</Text>
        <Text style={styles.text}>I think I'm in love, staying way too often</Text>
        <Text style={styles.text}>I can't play these games, think I'm switching up the offense</Text>
        <Text style={styles.text}>See me in LA, I be movin' cautious</Text>
        <Text style={styles.text}>I can't feel no pain rolling up, I'm so exhausted</Text>
        <Text style={styles.text}>I be so exhausted, woah-oh ay, woah-oh ay, ay, ay</Text>
        <Text style={styles.text}>I be so exhausted, woah-oh ay, woah-oh ay, ay, ay</Text>
        <Text><br/></Text>
        <Text><br/></Text>
        <Text style={styles.text}>I close my eyes, I see the vision</Text>
        <Text style={styles.text}>All this weed done got me lifted</Text>
        <Text style={styles.text}>Pull a foreign and I finish tonight</Text>
        <Text style={styles.text}>I told my momma that I'm ready</Text>
        <Text style={styles.text}>Got a solar, that's my kitchen</Text>
        <Text style={styles.text}>Middle finger to these bitches up, I</Text>
        <Text><br/></Text>
        <Text><br/></Text>
        <Text style={styles.text}>'Cause I'ma do it my way, switchin' like the flow, ay</Text>
        <Text style={styles.text}>Shawty said she like me, I told her "Who are you?", ay</Text>
        <Text style={styles.text}>I ain't with that lame shit since took up your bank, bitch</Text>
        <Text style={styles.text}>All these niggas talkin', fuck what they all sayin'</Text>
        <Text style={styles.text}>GTA I'm wasted, lately I've been anxious</Text>
        <Text><br/></Text>
        <Text><br/></Text>
        <Text style={styles.text}>I'm so done with this fake shit, I'm so done with you</Text>
        <Text style={styles.text}>I'm so done with you</Text>
        <Text><br/></Text>
        <Text><br/></Text>
        <Text style={styles.text}>Woah-oh, woah-oh, mm, mm</Text>
        <Text style={styles.text}>I be so exhausted</Text>
        <Text style={styles.text}>Woah-oh, woah-oh, mm, mm</Text>
        <Text><br/></Text>
        <Text><br/></Text>
        <Text style={styles.text}>I'ma roll another blunt</Text>
        <Text style={styles.text}>Gettin' lost I'm never found</Text>
        <Text style={styles.text}>Guess I'm never good enough for these bitches in my town</Text>
        <Text style={styles.text}>I don't really give a fuck, I'm a killer with my crown</Text>
        <Text style={styles.text}>Can't think about them all 'cause it all gon' hold me down</Text>
        <Text style={styles.text}>I done made it through the storm, I ain't talkin' NBA</Text>
        <Text style={styles.text}>Momma knew I'd be a star, momma know who I became</Text>
        <Text style={styles.text}>I got vulnerable on the phone, said he touched down in LA</Text>
        <Text style={styles.text}>I'ma get it how I get it, I ain't changin' for the fame</Text>
        <Text style={styles.text}>And I put it on my name</Text>
        <Text><br/></Text>
        <Text><br/></Text>
        <Text style={styles.text}>Fake shit, slowly I've been wasted</Text>
        <Text style={styles.text}>I'm so done with this fake shit</Text>
        <Text style={styles.text}>I'm so done with you</Text>
        <Text style={styles.text}>I'm so done with you</Text>
        <Text><br/></Text>
        <Text><br/></Text>
        <Text style={styles.text}>Ooh, ooh, ooh</Text>
        <Text style={styles.text}>I be so exhausted</Text>
        <Text style={styles.text}>Ooh, ooh, ooh, ooh</Text>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
  },
  ScrollArea: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#c9a0ff',
    color: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    textAlign: 'center',
  },
  subtitleWhite: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000ff',
    textAlign: 'center',
    backgroundColor: '#ffffffff',
    borderRadius: 100,
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '95%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 12,
    color: '#000000ff',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ffffffff',
    borderRadius: 10,
  },
  textRed: {
    fontSize: 16,
    color: '#FFFFFF',
    linearHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#FF0000',
    borderRadius: 10,
  },
})
