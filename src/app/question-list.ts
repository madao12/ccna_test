import { Question } from './question';

export const QUESTIONS = [
    {
        id: '1',
        numberOfAnswers: 3,
        name: 'Which three statements are true about the operation of a full-duplex Ethernet network?',
        // tslint:disable-next-line:max-line-length
        explanation: 'Half-duplex Ethernet is defined in the original 802.3 Ethernet and Cisco says you only use one wire pair with a digital signal running in both directions on the wire. It also uses the CSMA/CD protocol to help prevent collisions and to permit retransmitting if a collision does occur. If a hub is attached to a switch, it must operate in half-duplex mode because the end stations must be able to detect collisions. Half-duplex Ethernet—typically 10BaseT—is only about 30 to 40 percent efficient as Cisco sees it, because a large 10BaseT network will usually only give you 3- to 4Mbps—at most. Full-duplex Ethernet uses two pairs of wires, instead of one wire pair like half duplex. Also, full duplex uses a point-to-point connection between the transmitter of the transmitting device and the receiver of the receiving device, which means that with full-duplex data transfer, you get a faster data transfer compared to half duplex. And because the transmitted data is sent on a different set of wires than the received data, no collisions occur. The reason you don’t need to worry about collisions is because now Full-duplex Ethernet is like a freeway with multiple lanes instead of the single-lane road provided by half duplex. Full-duplex Ethernet is supposed to offer 100 percent efficiency in both directions; this means you can get 20Mbps with a 10Mbps Ethernet running full duplex, or 200Mbps for FastEthernet. ',
        choices:
        [
            {
                answear: 'There are no collisions in full-duplex mode.', istrue: true
            },
            {
                answear: 'A dedicated switch port is required for each full-duplex node.', istrue: true
            },
            {
                answear: 'Ethernet hub ports are preconfigured for full-duplex mod.', istrue: false
            },
            {
                // tslint:disable-next-line:max-line-length
                answear: 'In a full-duplex environment, the host network card must check for the availability of the network media before transmitting.', istrue: false
            },
            {
                answear: 'The host network card and the switch port must be capable of operating in full-duplex mode.', istrue: true
            }
        ]
    },
    {
        id: '3',
        numberOfAnswers: 1,
        name: 'Which OSI layer header contains the address of a destination host that is on another network?',
        // tslint:disable-next-line:max-line-length
        explanation: 'Only network address contains this information. To transmit the packets the sender uses network address and datalink address. But the layer 2 address represents just the address of the next hop device on the way to the sender. It is changed on each hop. Network address remains the same. ',
        choices:
        [
            {
                answear: 'application', istrue: false
            },
            {
                answear: 'session ', istrue: false
            },
            {
                answear: 'transport ', istrue: false
            },
            {
                answear: 'network ', istrue: true
            },
            {
                answear: 'data link', istrue: false
            },
            {
                answear: 'physical ', istrue: false
            }
        ]

    },
    {
        id: '4',
        numberOfAnswers: 1,
        name: 'Which layer of the TCP/IP stack combines the OSI model physical and data link layers?',
        // tslint:disable-next-line:max-line-length
        explanation: 'The Internet Protocol Suite, TCP/IP, is a suite of protocols used for communication over the internet. The TCP/ IP model was created after the OSI 7 layer model for two major reasons. First, the foundation of the Internet was built using the TCP/IP suite and through the spread of the World Wide Web and Internet, TCP/IP has been preferred. Second, a project researched by the Department of Defense (DOD) consisted of creating the TCP/IP protocols. The DODs goal was to bring international standards which could not be met by the OSI model. Since the DOD was the largest software consumer and they preferred the TCP/IP suite, most vendors used this model rather than the OSI. Below is a side by side comparison of the TCP/IP and OSI models',
        choices:
        [
            {
                answear: 'Internet layer .', istrue: false
            },
            {
                answear: ' transport layer ', istrue: false
            },
            {
                answear: ' application layer ', istrue: false
            },
            {
                answear: ' network access layer ', istrue: true
            }
        ]

    },
    {
        id: '5',
        numberOfAnswers: 1,
        name: 'Which protocol uses a connection-oriented service to deliver files between end systems?',
        // tslint:disable-next-line:max-line-length
        explanation: 'TCP is an example of a connection-oriented protocol. It requires a logical connection to be established between the two processes before data is exchanged. The connection must be maintained during the entire time that communication is taking place, then released afterwards. The process is much like a telephone call, where a virtual circuit is established--the caller must know the person`s telephone number and the phone must be answered--before the message can be delivered. TCP/IP is also a connection-oriented transport with orderly release. With orderly release, any data remaining in the buffer is sent before the connection is terminated. The release is accomplished in a three-way handshake between client and server processes. The connection-oriented protocols in the OSI protocol suite, on the other hand, do not support orderly release. Applications perform any handshake necessary for ensuring orderly release. Examples of services that use connection-oriented transport services are telnet, rlogin, and ftp',
        choices:
        [
            {
                answear: 'TFTP ', istrue: false
            },
            {
                answear: 'DNS  ', istrue: false
            },
            {
                answear: ' FTP  ', istrue: true
            },
            {
                answear: ' SNMP  ', istrue: false
            },
            {
                answear: ' RIP   ', istrue: false
            }

        ]

    },
    {
        id: '6',
        numberOfAnswers: 1,
        name: 'If the hubs in the graphic were replaced by switches, what would be virtually eliminated?',
        // tslint:disable-next-line:max-line-length
        explanation: 'Modern wired networks use a network switch to eliminate collisions. By connecting each device directly to a port on the switch, either each port on a switch becomes its own collision domain (in the case of half duplex links) or the possibility of collisions is eliminated entirely in the case of full duplex links.',
        choices:
        [
            {
                answear: 'broadcast domains', istrue: false
            },
            {
                answear: 'repeater domains', istrue: false
            },
            {
                answear: 'Ethernet collisions', istrue: true
            },
            {
                answear: 'signal amplification', istrue: false
            },
            {
                answear: 'Ethernet broadcasts', istrue: false
            }

        ]

    },
    {
        id: '7',
        numberOfAnswers: 1,
        name: 'If host A sends an IP packet to host B, what will the source physical address be in the frame when it reaches host B?',
        // tslint:disable-next-line:max-line-length
        explanation: 'When packets transfer from one host to another across a routed segment, the source IP address always remains the same source IP address, and the source physical (MAC) address will be the existing router’s interface address. Similarly, the destination IP address always remains the same and the destination physical (MAC) address is the destination router’s interface address.',
        choices:
        [
            {
                answear: '10.168.10.99', istrue: false
            },
            {
                answear: '10.168.11.88', istrue: false
            },
            {
                answear: 'A1:A1:A1:A1:A1:A1', istrue: false
            },
            {
                answear: 'B2:B2:B2:B2:B2:B2', istrue: false
            },
            {
                answear: 'C3:C3:C3:C3:C3:C3', istrue: true
            },
            {
                answear: 'D4:D4:D4:D4:D4:D4', istrue: false
            }

        ]

    },
    {
        id: '8',
        numberOfAnswers: 1,
        // tslint:disable-next-line:max-line-length
        name: 'HostX is transferring a file to the FTP server. Point A represents the frame as it goes toward the Toronto router. What will the Layer 2 destination address be at this point?',
        // tslint:disable-next-line:max-line-length
        explanation: 'For packets destined to a host on another IP network, the destination MAC address will be the LAN interface of the router. Since the FTP server lies on a different network, the host will know to send the frame to its default gateway, which is Toronto.',
        choices:
        [
            {
                answear: 'abcd.1123.0045', istrue: false
            },
            {
                answear: '192.168.7.17', istrue: false
            },
            {
                answear: 'aabb.5555.2222', istrue: false
            },
            {
                answear: '192.168.1.1', istrue: false
            },
            {
                answear: 'abcd.2246.0035', istrue: true
            }
        ]

    },
    {
        id: '9',
        numberOfAnswers: 1,
        name: 'Which network device functions only at Layer 1 of the OSI model?',
        // tslint:disable-next-line:max-line-length
        explanation: 'Most hubs are amplifying the electrical signal; therefore, they are really repeaters with several ports. Hubs and repeaters are Layer 1 (physical layer) devices.',
        choices:
        [
            {
                answear: 'Option A', istrue: false
            },
            {
                answear: 'Option B', istrue: true
            },
            {
                answear: 'Option C', istrue: false
            },
            {
                answear: 'Option D', istrue: false
            },
            {
                answear: 'Option E', istrue: false
            }
        ]

    },
    {
        id: '10',
        numberOfAnswers: 1,
        // tslint:disable-next-line:max-line-length
        name: 'The host in Kiev sends a request for an HTML document to the server in Minsk. What will be the source IP address of the packet as it leaves the Kiev router?',
        // tslint:disable-next-line:max-line-length
        explanation: 'Although the source and destination MAC address will change as a packet traverses a network, the source and destination IP address will not unless network address translation (NAT) is being done, which is not the case here.',
        choices:
        [
            {
                answear: '10.1.0.1', istrue: false
            },
            {
                answear: '10.1.0.5', istrue: false
            },
            {
                answear: '10.1.0.6', istrue: false
            },
            {
                answear: '10.1.0.14', istrue: false
            },
            {
                answear: '10.1.1.16', istrue: true
            },
            {
                answear: '10.1.2.8', istrue: false
            }
        ]

    },
    {
        id: '11',
        numberOfAnswers: 3,
        // tslint:disable-next-line:max-line-length
        name: 'As packets travel from Mary to Robert, which three devices will use the destination MAC address of the packet to determine a forwarding path?',
        // tslint:disable-next-line:max-line-length
        explanation: 'Switches use the destination MAC address information for forwarding traffic, while routers use the destination IP address information. Local Area Networks employ Layer 2 Switches and Bridges to forward and filter network traffic. Switches and Bridges operate at the Data Link Layer of the Open System Interconnect Model (OSI). Since Switches and Bridges operate at the Layer 2 they operate more intelligently than hubs, which work at Layer 1 (Physical Layer) of the OSI. Because the switches and bridges are able to listen to the traffic on the wire to examine the source and destination MAC address. Being able to listen to the traffic also allows the switches and bridges to compile a MAC address table to better filter and forward network traffic.To accomplish the above functions switches and bridges carry out the following tasks: MAC address learning by a switch or a bridge is accomplished by the same method. The switch or bridge listens to each device connected to each of its ports and scan the incoming frame for the source MAC address. This creates a MAC address to port map that is cataloged in the switches/bridge MAC database. Another name for the MAC address table is content addressable memory or CAM table. When a switch or bridge is listening to the network traffic, it receives each frame and compares it to the MAC address table. By checking the MAC table the switch/ bridge are able o determine which port the frame came in on. If the frame is on the MAC table the frame is filtered or transmitted on only that port. If the switch determines that the frame is not on the MAC table, the frame is forwarded out to all ports except the incoming port. ',
        choices:
        [
            {
                answear: 'Hub1', istrue: false
            },
            {
                answear: 'Switch1', istrue: true
            },
            {
                answear: 'Router1', istrue: false
            },
            {
                answear: 'Switch2', istrue: true
            },
            {
                answear: 'Router2', istrue: false
            },
            {
                answear: 'Switch3', istrue: true
            }
        ]

    },
    {
      id: '12',
      numberOfAnswers: 1,
      // tslint:disable-next-line:max-line-length
      name: 'Mary is sending an instant message to Robert. The message will be broken into a series of packets that will traverse all network devices. What addresses will populate these packets as they are forwarded from Router1 to Router2?',
      // tslint:disable-next-line:max-line-length
      explanation: 'The Source and Destination IP address is not going to change. Host 1 IP address will stay as being the source IP and the Host 2 IP address will stay the destination IP address. Those two are not going to change. For the MAC address it is going to change each time it goes from one hope to another. (Except switches... they dont change anything) Frame leaving HOST 1 is going to have a source MAC of Host 1 and a destination MAC of Router 1. Router 1 is going to strip that info off and then will make the source MAC address of Router1 exiting interface, and making Router2 interface as the destination MAC address. Then the same will happen... Router2 is going to change the source/destination info to the source MAC being the Router2 interface that it is going out, and the destination will be Host2`s MAC address.',
      choices:
      [
          {
              answear: 'Option A', istrue: false
          },
          {
              answear: 'Option B', istrue: true
          },
          {
              answear: 'Option C', istrue: false
          },
          {
              answear: 'Option D', istrue: false
          },
          {
              answear: 'Option E', istrue: false
          }
      ]

  },
  {
    id: '13',
    numberOfAnswers: 1,
    // tslint:disable-next-line:max-line-length
    name: 'A network device needs to be installed in the place of the icon labeled Network Device to accommodate a leased line attachment to the Internet. Which network device and interface configuration meets the minimum requirements for this installation?',
    // tslint:disable-next-line:max-line-length
    explanation: 'Only a router can terminate a leased line attachment access circuit, and only a router can connect two different IP networks. Here, we will need a router with two interfaces, one serial connection for the line attachment and one Ethernet interface to connect to the switch on the LAN.',
    choices:
    [
        {
            answear: 'a router with two Ethernet interfaces', istrue: false
        },
        {
            answear: 'a switch with two Ethernet interfaces', istrue: false
        },
        {
            answear: 'a router with one Ethernet and one serial interface', istrue: true
        },
        {
            answear: 'a switch with one Ethernet and one serial interface', istrue: false
        },
        {
            answear: 'a router with one Ethernet and one modem interface', istrue: false
        }
    ]
  },
  {
    id: '14',
    numberOfAnswers: 1,
    // tslint:disable-next-line:max-line-length
    name: 'Which transport layer protocol provides best-effort delivery service with no acknowledgment receipt required?',
    // tslint:disable-next-line:max-line-length
    explanation: 'UDP provides a connectionless datagram service that offers best-effort delivery, which means that UDP does not guarantee delivery or verify sequencing for any datagrams. A source host that needs reliable communication must use either TCP or a program that provides its own sequencing and acknowledgment services.',
    choices:
    [
        {
            answear: 'HTTP', istrue: false
        },
        {
            answear: 'IP', istrue: false
        },
        {
            answear: 'TCP', istrue: false
        },
        {
            answear: 'Telnet', istrue: false
        },
        {
            answear: 'UDP', istrue: true
        }
    ]
  },
  {
    id: '15',
    numberOfAnswers: 1,
    // tslint:disable-next-line:max-line-length
    name: 'Which layer of the OSI model controls the reliability of communications between network devices using flow control, sequencing and acknowledgments?',
    // tslint:disable-next-line:max-line-length
    explanation: '',
    choices:
    [
        {
            answear: 'Physical', istrue: false
        },
        {
            answear: 'Data-link', istrue: false
        },
        {
            answear: 'Transport', istrue: true
        },
        {
            answear: 'Network', istrue: false
        }
    ]
  },
  {
    id: '16',
    numberOfAnswers: 2,
    // tslint:disable-next-line:max-line-length
    name: 'Which statements are true regarding ICMP packets?',
    // tslint:disable-next-line:max-line-length
    explanation: 'Ping may be used to find out whether the local machines are connected to the network or whether a remote site is reachable. This tool is a common network tool for determining the network connectivity, which uses ICMP protocol instead of TCP/IP and UDP/IP. This protocol is usually associated with the network management tools, which provide network information to network administrators, such as ping and traceroute (the later also uses the UDP/IP protocol). ICMP is quite different from the TCP/IP and UDP/IP protocols. No source and destination ports are included in its packets. Therefore, usual packet-filtering rules for TCP/IP and UDP/IP are not applicable. Fortunately, a special "signature" known as the packet’s Message type is included for denoting the purposes of the ICMP packet. Most commonly used message types are namely, 0, 3, 4, 5, 8, 11, and 12 which represent echo reply, destination unreachable, source quench, redirect, echo request, time exceeded, and parameter problem respectively. In the ping service, after receiving the ICMP "echo request" packet from the source location, the destination',
    choices:
    [
        {
            answear: 'They acknowledge receipt of TCP segments.', istrue: false
        },
        {
            answear: 'They guarantee datagram delivery.', istrue: false
        },
        {
            answear: 'TRACERT uses ICMP packets.', istrue: true
        },
        {
            answear: 'They are encapsulated within IP datagrams.', istrue: true
        },
        {
          answear: 'They are encapsulated within UDP datagrams.', istrue: false
        }
    ]
  },
  {
    id: '17',
    numberOfAnswers: 3,
    // tslint:disable-next-line:max-line-length
    name: 'Which statements accurately describe CDP?',
    // tslint:disable-next-line:max-line-length
    explanation: 'CDP (Cisco Discovery Protocol) is a proprietary protocol designed by Cisco to help administrators collect information about both locally attached and remote devices. By using CDP, you can gather hardware and protocol information about neighbor devices containing useful info for troubleshooting and documenting the network.',
    choices:
    [
        {
            answear: 'CDP is an IEEE standard protocol.', istrue: false
        },
        {
            answear: 'CDP is a Cisco proprietary protocol.', istrue: true
        },
        {
            answear: 'CDP is a datalink layer protocol.', istrue: true
        },
        {
            answear: 'CDP is a network layer protocol.', istrue: false
        },
        {
          answear: 'CDP can discover directly connected neighboring Cisco devices.', istrue: true
        },
        {
          answear: 'CDP can discover Cisco devices that are not directly connected.', istrue: false
        }
    ]
  },
  {
    id: '18',
    numberOfAnswers: 1,
    // tslint:disable-next-line:max-line-length
    name: 'How does a switch differ from a hub?',
    // tslint:disable-next-line:max-line-length
    explanation: 'Some of the features and functions of a switch include: A switch is essentially a fast, multi-port bridge, which can contain dozens of ports. Rather than creating two collision domains, each port creates its own collision domain. In a network of twenty nodes, twenty collision domains exist if each node is plugged into its own switch port. If an uplink port is included, one switch creates twenty-one single-node collision domains. A switch dynamically builds and maintains a Content-Addressable Memory (CAM) table, holding all of the necessary MAC information for each port. For a detailed description of how switches operate, and their key differences to hubs, see the reference link below. Reference: http://www.cisco.com/warp/public/473/lan-switch-cisco.shtml',
    choices:
    [
        {
            answear: 'A switch does not induce any latency into the frame transfer time.', istrue: false
        },
        {
            answear: 'A switch tracks MAC addresses of directly-connected devices.', istrue: true
        },
        {
            answear: 'A switch operates at a lower, more efficient layer of the OSI model.', istrue: false
        },
        {
            answear: 'A switch decreases the number of broadcast domains.', istrue: false
        },
        {
          answear: 'A switch decreases the number of collision domains.', istrue: false
        }
    ]
  }

];
