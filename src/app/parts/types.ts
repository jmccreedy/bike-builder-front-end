export interface Part {
  id:               ID;
  part_description: ID;
  part_features:    ID;
  part_img:         ID;
  part_price:       ID;
  part_title:       ID;
  part_type:        ID;
  part_url:         ID;
}

export interface ID {
  S: string;
}

export interface DisplayData {
  imgUrl:      string;
  description: string;
  features:    string;
}

export interface PartFormData {
  frame: Part;
  groupset: Part;
  handlebar: Part;
  saddle: Part;
  seatpost: Part;
  stem: Part;
  tyres: Part;
  wheelset: Part;
}

export interface Build {
  saddle:     Frame;
  handlebar:  Frame;
  user_email: string;
  build_cost: string;
  groupset:   Frame;
  seatpost:   Frame;
  tyres:      Frame;
  wheelset:   Frame;
  frame:      Frame;
  id:         string;
  stem:       Frame;
}

export interface Frame {
  part_img:   string;
  part_price: string;
  part_type:  string;
  part_url:   string;
  id:         string;
  part_title: string;
}

export interface ID {
  S: string;
}
