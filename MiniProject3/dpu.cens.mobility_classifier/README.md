# dpu.cens.mobility_classifier
Forked from https://github.com/openmhealth/dpu.cens.mobility_classifier

This was part of CS 6440 IHI Spring 2021 MiniProject 3

* Previously created here:
* * https://github.gatech.edu/dstrube3/dpu.cens.mobility_classifier

____
Original README:

# A Mobility Classification DPU 

Classifies raw accelerometer and wi-fi data points into mobility modes.

The resulting modes will be one of: error, still, walk, run, drive. Bike is currently unsupported.

This DPU is available as a Java library and a Java EE war file.

The Java library comes with an example: org.openmhealth.dpu.mobilityclassifier.example.Example. To run the example:

    git clone ...
    cd to the root of this project
    ant clean dist-jar
    java -cp dist:lib/joda-time-2.1.jar:lib/json.org-2011-11-03.jar:lib/mobility-classifier-1.2.9.jar:build/classes org.openmhealth.dpu.mobilityclassifier.example.Example
  
The example takes JSON mobility points stored in example.json and processes them using ClassificationService. The ClassifiedPoints are then output to System.out. 


 
