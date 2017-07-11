#include <ArduinoJson.h>

String command = "";
char endMarker = '%';
int device = 13;

int devicetypeId = 115;

void setup() {
  Serial.begin(9600);
  pinMode(device, OUTPUT);
}

void loop() {}

void devicetypeNewValue (int code) {
   if ( code == 1) {
      digitalWrite(device, HIGH);
     } 
    else if (code == 0) {
      digitalWrite(device, LOW);
     }
}

void executeFunction(String json_data) {
  StaticJsonBuffer<200> jsonBuffer;
  JsonObject& json_received = jsonBuffer.parseObject(json_data);
  //on décompose la chaine de cartère
  if ( json_received["deviceType"] == int(devicetypeId) ) {
    devicetypeNewValue(json_received["value"]);
  } 
}

void serialEvent() {
    //lit toutes les données (vide le buffer de réception)
    char last_readed_char = Serial.read();
    if ( last_readed_char == endMarker ) {
      executeFunction(command);
      command = "";
    } else {
      command += last_readed_char;
    }
}

